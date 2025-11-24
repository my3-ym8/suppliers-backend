import jwt from 'jsonwebtoken';
import env from '../../config/env.ts';
import { AuthRepository } from './auth.repository.ts';
import { RegisterDto, LoginDto } from './auth.dto.ts';
import {
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '../../core/http/httpException.ts';
import { hashPassword, verifyPassword, generateToken, hashToken } from '../../core/utils/crypto.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  /**
   * Kullanıcı kaydı
   */
  async register(data: RegisterDto) {
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
      role: data.role as UserRole,
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
  async login(data: LoginDto) {
    // Kullanıcıyı bul
    const user = await this.authRepository.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('E-posta veya şifre hatalı');
    }

    // Süper admin kontrolü (.env'den)
    if (user.is_superadmin) {
      if (data.email !== env.SUPERADMIN_EMAIL || data.password !== env.SUPERADMIN_PASSWORD) {
        throw new UnauthorizedException('E-posta veya şifre hatalı');
      }
    } else {
      // Normal kullanıcı şifre kontrolü
      if (!user.password_hash) {
        throw new UnauthorizedException('Şifre bulunamadı');
      }

      const isPasswordValid = await verifyPassword(data.password, user.password_hash);
      if (!isPasswordValid) {
        throw new UnauthorizedException('E-posta veya şifre hatalı');
      }
    }

    // Kullanıcı aktif mi?
    if (!user.is_active) {
      throw new UnauthorizedException('Hesabınız aktif değil');
    }

    // Son giriş zamanını güncelle
    await this.authRepository.updateLastLogin(user.auth_user_id);

    // JWT token oluştur
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
  async verifyEmail(token: string) {
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
   * JWT Access Token oluştur
   */
  private generateAccessToken(user: {
    auth_user_id: string;
    email: string;
    role: string;
    is_superadmin: boolean;
  }): string {
    const secret = env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET environment variable is not set');
    }
    
    const payload = {
        auth_user_id: user.auth_user_id,
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

