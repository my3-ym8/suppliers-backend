// Auth service: Kullanıcı kaydı, girişi, e-posta doğrulama ve çıkış iş mantığını içerir
import jwt from 'jsonwebtoken';
import env from '../../config/env.ts';
import { ConflictException, UnauthorizedException, BadRequestException, NotFoundException, } from '../../core/http/httpException.ts';
import { hashPassword, verifyPassword, generateToken, hashToken } from '../../core/utils/crypto.ts';
export class AuthService {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    /**
     * Kullanıcı kaydı
     */
    async register(data, requesterUserId) {
        // Admin rolü kontrolü: Sadece süperadmin admin kaydı yapabilir
        if (data.role === 'admin') {
            // Admin kaydı için requesterUserId zorunlu (süperadmin olmalı)
            if (!requesterUserId) {
                throw new UnauthorizedException('Admin kaydı için süperadmin yetkisi gereklidir. Lütfen /register/admin endpoint\'ini kullanın.');
            }
            // İstek yapan kullanıcıyı kontrol et
            const requester = await this.authRepository.findById(requesterUserId);
            if (!requester) {
                throw new UnauthorizedException('Yetkilendirme hatası');
            }
            // Süperadmin kontrolü
            if (!requester.is_superadmin) {
                throw new UnauthorizedException('Sadece süperadmin admin kaydı yapabilir');
            }
            // Email kontrolü: .env'deki SUPERADMIN_EMAIL ile eşleşmemeli (süperadmin tek olmalı)
            if (data.email === env.SUPERADMIN_EMAIL) {
                throw new BadRequestException('Bu email adresi süperadmin için rezerve edilmiştir');
            }
        }
        // E-posta kontrolü
        const existingUser = await this.authRepository.findByEmail(data.email);
        if (existingUser) {
            throw new ConflictException('Bu e-posta adresi zaten kullanılıyor');
        }
        // Şifreyi hash'le
        const password_hash = await hashPassword(data.password);
        // Application ID oluştur
        const application_id = await this.authRepository.generateApplicationId();
        // Kullanıcı oluştur
        const user = await this.authRepository.create({
            email: data.email,
            password_hash,
            phone: data.phone,
            role: data.role,
            application_id,
        });
        // Profil oluştur
        await this.authRepository.createProfile({
            auth_user_id: user.auth_user_id,
            first_name: data.first_name,
            last_name: data.last_name,
            kvkk_accepted: data.kvkk_accepted,
        });
        // E-posta doğrulama token'ı oluştur
        const verificationToken = generateToken();
        const tokenHash = hashToken(verificationToken);
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24); // 24 saat geçerli
        await this.authRepository.createEmailVerificationToken({
            auth_user_id: user.auth_user_id,
            token_hash: tokenHash,
            expires_at: expiresAt,
            metadata: {
                ip: '0.0.0.0', // TODO: Request'ten al
                user_agent: 'unknown', // TODO: Request'ten al
            },
        });
        // JWT token oluştur
        const accessToken = this.generateAccessToken(user);
        return {
            user: {
                auth_user_id: user.auth_user_id,
                email: user.email,
                role: user.role,
                application_id: user.application_id,
                email_verified: user.email_verified,
            },
            accessToken,
            verificationToken, // E-posta doğrulama için (production'da e-posta ile gönderilir)
        };
    }
    /**
     * Kullanıcı girişi
     */
    async login(data) {
        // 1) Email kontrolü - Kullanıcı var mı?
        const user = await this.authRepository.findByEmail(data.email);
        if (!user) {
            throw new UnauthorizedException('E-posta veya şifre hatalı');
        }
        // 2) Password hash kontrolü - bcrypt ile doğru mu? (Tüm kullanıcılar için)
        if (!user.password_hash) {
            throw new UnauthorizedException('Şifre bulunamadı');
        }
        const isPasswordValid = await verifyPassword(data.password, user.password_hash);
        if (!isPasswordValid) {
            throw new UnauthorizedException('E-posta veya şifre hatalı');
        }
        // 3) Eğer kullanıcı süperadmin ise masterKey kontrolü
        if (user.is_superadmin) {
            if (!data.masterKey) {
                throw new UnauthorizedException('Süperadmin girişi için masterKey gereklidir');
            }
            if (!env.SUPERADMIN_MASTER_KEY) {
                throw new Error('SUPERADMIN_MASTER_KEY environment variable is not set');
            }
            if (data.masterKey !== env.SUPERADMIN_MASTER_KEY) {
                throw new UnauthorizedException('Master key hatalı');
            }
        }
        // Kullanıcı aktif mi?
        if (!user.is_active) {
            throw new UnauthorizedException('Hesabınız aktif değil');
        }
        // Son giriş zamanını güncelle
        await this.authRepository.updateLastLogin(user.auth_user_id);
        // 4) JWT token oluştur (id, email, role, is_superadmin)
        const accessToken = this.generateAccessToken(user);
        return {
            user: {
                auth_user_id: user.auth_user_id,
                email: user.email,
                role: user.role,
                application_id: user.application_id,
                email_verified: user.email_verified,
                is_superadmin: user.is_superadmin,
            },
            accessToken,
        };
    }
    /**
     * E-posta doğrulama
     */
    async verifyEmail(token) {
        const tokenHash = hashToken(token);
        const user = await this.authRepository.findUserByToken(tokenHash);
        if (!user) {
            throw new BadRequestException('Geçersiz veya süresi dolmuş token');
        }
        // Token'ı kullanıldı olarak işaretle
        await this.authRepository.markTokenAsUsed(tokenHash);
        // E-posta doğrulama durumunu güncelle
        await this.authRepository.verifyEmail(user.auth_user_id);
        return {
            message: 'E-posta başarıyla doğrulandı',
        };
    }
    /**
     * Kullanıcı çıkışı
     * Not: JWT stateless olduğu için token'ı geçersiz kılamayız.
     * Client-side'da token'ı silmek yeterlidir.
     * İleride token blacklist mekanizması eklenebilir.
     */
    async logout(authUserId) {
        // Kullanıcıyı kontrol et
        const user = await this.authRepository.findById(authUserId);
        if (!user) {
            throw new UnauthorizedException('Kullanıcı bulunamadı');
        }
        // İleride token blacklist eklenebilir
        // Şimdilik sadece başarı mesajı döndürüyoruz
        return {
            message: 'Çıkış başarılı',
        };
    }
    /**
     * Kullanıcı güncelleme
     */
    async update(authUserId, data) {
        // Kullanıcıyı kontrol et
        const user = await this.authRepository.findById(authUserId);
        if (!user) {
            throw new UnauthorizedException('Kullanıcı bulunamadı');
        }
        // E-posta değişikliği kontrolü
        if (data.email && data.email !== user.email) {
            const existingUser = await this.authRepository.findByEmail(data.email);
            if (existingUser) {
                throw new ConflictException('Bu e-posta adresi zaten kullanılıyor');
            }
        }
        // Güncelleme verilerini hazırla
        const updateData = {};
        if (data.email) {
            updateData.email = data.email;
        }
        if (data.phone !== undefined) {
            updateData.phone = data.phone;
        }
        if (data.password) {
            updateData.password_hash = await hashPassword(data.password);
        }
        // Kullanıcıyı güncelle
        const updatedUser = await this.authRepository.update(authUserId, updateData);
        // Profil güncellemesi
        if (data.first_name || data.last_name) {
            const profileData = {};
            if (data.first_name) {
                profileData.first_name = data.first_name;
            }
            if (data.last_name) {
                profileData.last_name = data.last_name;
            }
            await this.authRepository.updateProfile(authUserId, profileData);
        }
        return {
            user: {
                auth_user_id: updatedUser.auth_user_id,
                email: updatedUser.email,
                phone: updatedUser.phone,
                role: updatedUser.role,
                application_id: updatedUser.application_id,
                email_verified: updatedUser.email_verified,
            },
            message: 'Kullanıcı başarıyla güncellendi',
        };
    }
    /**
     * Kullanıcı silme (soft delete)
     */
    async delete(authUserId) {
        // Kullanıcıyı kontrol et
        const user = await this.authRepository.findById(authUserId);
        if (!user) {
            throw new UnauthorizedException('Kullanıcı bulunamadı');
        }
        // Kullanıcıyı sil (soft delete)
        await this.authRepository.delete(authUserId);
        return {
            message: 'Kullanıcı başarıyla silindi',
        };
    }
    /**
     * Tüm kullanıcıları getir
     */
    async getAllUsers(includeInactive = false) {
        const users = await this.authRepository.findAll(includeInactive);
        return {
            users: users.map(user => ({
                auth_user_id: user.auth_user_id,
                email: user.email,
                phone: user.phone,
                role: user.role,
                application_id: user.application_id,
                email_verified: user.email_verified,
                is_active: user.is_active,
                is_superadmin: user.is_superadmin,
                created_at: user.created_at,
                last_login_at: user.last_login_at,
                profile: user.profiles ? {
                    first_name: user.profiles.first_name,
                    last_name: user.profiles.last_name,
                } : null,
            })),
        };
    }
    /**
     * ID ile kullanıcı getir
     */
    async getUserById(authUserId) {
        const user = await this.authRepository.findById(authUserId);
        if (!user) {
            throw new NotFoundException('Kullanıcı bulunamadı');
        }
        return {
            user: {
                auth_user_id: user.auth_user_id,
                email: user.email,
                phone: user.phone,
                role: user.role,
                application_id: user.application_id,
                email_verified: user.email_verified,
                is_active: user.is_active,
                is_superadmin: user.is_superadmin,
                created_at: user.created_at,
                last_login_at: user.last_login_at,
                profile: user.profiles ? {
                    first_name: user.profiles.first_name,
                    last_name: user.profiles.last_name,
                    kvkk_accepted: user.profiles.kvkk_accepted,
                    kvkk_accepted_at: user.profiles.kvkk_accepted_at,
                } : null,
            },
        };
    }
    /**
     * JWT Access Token oluştur
     */
    generateAccessToken(user) {
        const secret = env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET environment variable is not set');
        }
        const payload = {
            id: user.auth_user_id, // Kullanıcı ID'si
            auth_user_id: user.auth_user_id, // Geriye dönük uyumluluk için
            email: user.email,
            role: user.role,
            is_superadmin: user.is_superadmin,
        };
        // @ts-ignore - jsonwebtoken tip tanımlarında expiresIn string kabul ediyor
        return jwt.sign(payload, secret, {
            expiresIn: env.JWT_EXPIRES_IN || '7d',
        });
    }
}
//# sourceMappingURL=auth.service.js.map