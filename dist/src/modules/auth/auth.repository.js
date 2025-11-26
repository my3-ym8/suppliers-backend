// Auth repository: Veritabanı işlemlerini yönetir (kullanıcı CRUD, token işlemleri, profil yönetimi)
import prisma from '../../core/prisma.ts';
export class AuthRepository {
    /**
     * E-posta ile kullanıcı bul
     */
    async findByEmail(email) {
        return prisma.authUser.findUnique({
            where: { email },
            include: {
                profiles: true,
            },
        });
    }
    /**
     * ID ile kullanıcı bul
     */
    async findById(authUserId) {
        return prisma.authUser.findUnique({
            where: { auth_user_id: authUserId },
            include: {
                profiles: true,
            },
        });
    }
    /**
     * Tüm kullanıcıları getir (aktif olanlar)
     */
    async findAll(includeInactive = false) {
        const where = includeInactive ? {} : { is_active: true };
        return prisma.authUser.findMany({
            where,
            include: {
                profiles: true,
            },
            orderBy: {
                created_at: 'desc',
            },
        });
    }
    /**
     * Yeni kullanıcı oluştur
     */
    async create(data) {
        return prisma.authUser.create({
            data,
            include: {
                profiles: true,
            },
        });
    }
    /**
     * Kullanıcı profil oluştur
     */
    async createProfile(data) {
        return prisma.userProfile.create({
            data: {
                ...data,
                kvkk_accepted_at: data.kvkk_accepted ? new Date() : null,
            },
        });
    }
    /**
     * Son giriş zamanını güncelle
     */
    async updateLastLogin(authUserId) {
        return prisma.authUser.update({
            where: { auth_user_id: authUserId },
            data: { last_login_at: new Date() },
        });
    }
    /**
     * E-posta doğrulama token'ı oluştur
     */
    async createEmailVerificationToken(data) {
        return prisma.authToken.create({
            data: {
                ...data,
                token_type: 'EMAIL_VERIFICATION',
                is_single_use: true,
            },
        });
    }
    /**
     * Token ile kullanıcı bul
     */
    async findUserByToken(tokenHash) {
        const token = await prisma.authToken.findUnique({
            where: { token_hash: tokenHash },
            include: {
                auth_user: true,
            },
        });
        if (!token || token.used_at || token.expires_at < new Date()) {
            return null;
        }
        return token.auth_user;
    }
    /**
     * Token'ı kullanıldı olarak işaretle
     */
    async markTokenAsUsed(tokenHash) {
        return prisma.authToken.update({
            where: { token_hash: tokenHash },
            data: { used_at: new Date() },
        });
    }
    /**
     * E-posta doğrulama durumunu güncelle
     */
    async verifyEmail(authUserId) {
        return prisma.authUser.update({
            where: { auth_user_id: authUserId },
            data: { email_verified: true },
        });
    }
    /**
     * Application ID oluştur (01, 02, 03...)
     */
    async generateApplicationId() {
        const lastUser = await prisma.authUser.findFirst({
            orderBy: { created_at: 'desc' },
            select: { application_id: true },
        });
        if (!lastUser) {
            return '01';
        }
        const lastId = parseInt(lastUser.application_id, 10);
        const nextId = (lastId + 1).toString().padStart(2, '0');
        return nextId;
    }
    /**
     * Kullanıcı güncelle
     */
    async update(authUserId, data) {
        return prisma.authUser.update({
            where: { auth_user_id: authUserId },
            data,
            include: {
                profiles: true,
            },
        });
    }
    /**
     * Kullanıcı profilini güncelle
     */
    async updateProfile(authUserId, data) {
        return prisma.userProfile.update({
            where: { auth_user_id: authUserId },
            data,
        });
    }
    /**
     * Kullanıcıyı sil (soft delete - is_active = false)
     */
    async delete(authUserId) {
        return prisma.authUser.update({
            where: { auth_user_id: authUserId },
            data: { is_active: false },
        });
    }
}
//# sourceMappingURL=auth.repository.js.map