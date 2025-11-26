import { UserRole } from '../../../generated/prisma/enums.ts';
import type { Prisma } from '../../../generated/prisma/client.ts';
export declare class AuthRepository {
    /**
     * E-posta ile kullanıcı bul
     */
    findByEmail(email: string): Promise<({
        profiles: {
            auth_user_id: string;
            created_at: Date;
            updated_at: Date;
            first_name: string | null;
            last_name: string | null;
            kvkk_accepted: boolean;
            kvkk_accepted_at: Date | null;
            user_profile_id: number;
        } | null;
    } & {
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }) | null>;
    /**
     * ID ile kullanıcı bul
     */
    findById(authUserId: string): Promise<({
        profiles: {
            auth_user_id: string;
            created_at: Date;
            updated_at: Date;
            first_name: string | null;
            last_name: string | null;
            kvkk_accepted: boolean;
            kvkk_accepted_at: Date | null;
            user_profile_id: number;
        } | null;
    } & {
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }) | null>;
    /**
     * Tüm kullanıcıları getir (aktif olanlar)
     */
    findAll(includeInactive?: boolean): Promise<({
        profiles: {
            auth_user_id: string;
            created_at: Date;
            updated_at: Date;
            first_name: string | null;
            last_name: string | null;
            kvkk_accepted: boolean;
            kvkk_accepted_at: Date | null;
            user_profile_id: number;
        } | null;
    } & {
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    })[]>;
    /**
     * Yeni kullanıcı oluştur
     */
    create(data: {
        email: string;
        password_hash: string;
        phone?: string;
        role: UserRole;
        application_id: string;
    }): Promise<{
        profiles: {
            auth_user_id: string;
            created_at: Date;
            updated_at: Date;
            first_name: string | null;
            last_name: string | null;
            kvkk_accepted: boolean;
            kvkk_accepted_at: Date | null;
            user_profile_id: number;
        } | null;
    } & {
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }>;
    /**
     * Kullanıcı profil oluştur
     */
    createProfile(data: {
        auth_user_id: string;
        first_name: string;
        last_name: string;
        kvkk_accepted: boolean;
    }): Promise<{
        auth_user_id: string;
        created_at: Date;
        updated_at: Date;
        first_name: string | null;
        last_name: string | null;
        kvkk_accepted: boolean;
        kvkk_accepted_at: Date | null;
        user_profile_id: number;
    }>;
    /**
     * Son giriş zamanını güncelle
     */
    updateLastLogin(authUserId: string): Promise<{
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }>;
    /**
     * E-posta doğrulama token'ı oluştur
     */
    createEmailVerificationToken(data: {
        auth_user_id: string;
        token_hash: string;
        expires_at: Date;
        metadata?: Prisma.InputJsonValue;
    }): Promise<{
        auth_user_id: string;
        created_at: Date;
        token_hash: string;
        token_type: string;
        is_single_use: boolean;
        expires_at: Date;
        used_at: Date | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        token_id: number;
    }>;
    /**
     * Token ile kullanıcı bul
     */
    findUserByToken(tokenHash: string): Promise<{
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    } | null>;
    /**
     * Token'ı kullanıldı olarak işaretle
     */
    markTokenAsUsed(tokenHash: string): Promise<{
        auth_user_id: string;
        created_at: Date;
        token_hash: string;
        token_type: string;
        is_single_use: boolean;
        expires_at: Date;
        used_at: Date | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        token_id: number;
    }>;
    /**
     * E-posta doğrulama durumunu güncelle
     */
    verifyEmail(authUserId: string): Promise<{
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }>;
    /**
     * Application ID oluştur (01, 02, 03...)
     */
    generateApplicationId(): Promise<string>;
    /**
     * Kullanıcı güncelle
     */
    update(authUserId: string, data: {
        email?: string;
        phone?: string;
        password_hash?: string;
    }): Promise<{
        profiles: {
            auth_user_id: string;
            created_at: Date;
            updated_at: Date;
            first_name: string | null;
            last_name: string | null;
            kvkk_accepted: boolean;
            kvkk_accepted_at: Date | null;
            user_profile_id: number;
        } | null;
    } & {
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }>;
    /**
     * Kullanıcı profilini güncelle
     */
    updateProfile(authUserId: string, data: {
        first_name?: string;
        last_name?: string;
    }): Promise<{
        auth_user_id: string;
        created_at: Date;
        updated_at: Date;
        first_name: string | null;
        last_name: string | null;
        kvkk_accepted: boolean;
        kvkk_accepted_at: Date | null;
        user_profile_id: number;
    }>;
    /**
     * Kullanıcıyı sil (soft delete - is_active = false)
     */
    delete(authUserId: string): Promise<{
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }>;
}
//# sourceMappingURL=auth.repository.d.ts.map