import { AuthRepository } from './auth.repository.ts';
import { RegisterDto, LoginDto, UpdateDto } from './auth.dto.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
export declare class AuthService {
    private authRepository;
    constructor(authRepository: AuthRepository);
    /**
     * Kullanıcı kaydı
     */
    register(data: RegisterDto, requesterUserId?: string): Promise<{
        user: {
            auth_user_id: string;
            email: string;
            role: UserRole;
            application_id: string;
            email_verified: boolean;
        };
        accessToken: string;
        verificationToken: string;
    }>;
    /**
     * Kullanıcı girişi
     */
    login(data: LoginDto): Promise<{
        user: {
            auth_user_id: string;
            email: string;
            role: UserRole;
            application_id: string;
            email_verified: boolean;
            is_superadmin: boolean;
        };
        accessToken: string;
    }>;
    /**
     * E-posta doğrulama
     */
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    /**
     * Kullanıcı çıkışı
     * Not: JWT stateless olduğu için token'ı geçersiz kılamayız.
     * Client-side'da token'ı silmek yeterlidir.
     * İleride token blacklist mekanizması eklenebilir.
     */
    logout(authUserId: string): Promise<{
        message: string;
    }>;
    /**
     * Kullanıcı güncelleme
     */
    update(authUserId: string, data: UpdateDto): Promise<{
        user: {
            auth_user_id: string;
            email: string;
            phone: string | null;
            role: UserRole;
            application_id: string;
            email_verified: boolean;
        };
        message: string;
    }>;
    /**
     * Kullanıcı silme (soft delete)
     */
    delete(authUserId: string): Promise<{
        message: string;
    }>;
    /**
     * Tüm kullanıcıları getir
     */
    getAllUsers(includeInactive?: boolean): Promise<{
        users: {
            auth_user_id: string;
            email: string;
            phone: string | null;
            role: UserRole;
            application_id: string;
            email_verified: boolean;
            is_active: boolean;
            is_superadmin: boolean;
            created_at: Date;
            last_login_at: Date | null;
            profile: {
                first_name: string | null;
                last_name: string | null;
            } | null;
        }[];
    }>;
    /**
     * ID ile kullanıcı getir
     */
    getUserById(authUserId: string): Promise<{
        user: {
            auth_user_id: string;
            email: string;
            phone: string | null;
            role: UserRole;
            application_id: string;
            email_verified: boolean;
            is_active: boolean;
            is_superadmin: boolean;
            created_at: Date;
            last_login_at: Date | null;
            profile: {
                first_name: string | null;
                last_name: string | null;
                kvkk_accepted: boolean;
                kvkk_accepted_at: Date | null;
            } | null;
        };
    }>;
    /**
     * JWT Access Token oluştur
     */
    private generateAccessToken;
}
//# sourceMappingURL=auth.service.d.ts.map