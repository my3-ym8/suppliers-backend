// Auth repository: Veritabanı işlemlerini yönetir (kullanıcı CRUD, token işlemleri, profil yönetimi)
import prisma from '../../core/prisma.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
import type { Prisma } from '../../../generated/prisma/client.ts';

export class AuthRepository {
  /**
   * E-posta ile kullanıcı bul
   */
  async findByEmail(email: string) {
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
  async findById(authUserId: string) {
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
  async create(data: {
    email: string;
    password_hash: string;
    phone?: string;
    role: UserRole;
    application_id: string;
  }) {
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
  async createProfile(data: {
    auth_user_id: string;
    first_name: string;
    last_name: string;
    kvkk_accepted: boolean;
  }) {
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
  async updateLastLogin(authUserId: string) {
    return prisma.authUser.update({
      where: { auth_user_id: authUserId },
      data: { last_login_at: new Date() },
    });
  }

  /**
   * E-posta doğrulama token'ı oluştur
   */
  async createEmailVerificationToken(data: {
    auth_user_id: string;
    token_hash: string;
    expires_at: Date;
    metadata?: Prisma.InputJsonValue;
  }) {
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
  async findUserByToken(tokenHash: string) {
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
  async markTokenAsUsed(tokenHash: string) {
    return prisma.authToken.update({
      where: { token_hash: tokenHash },
      data: { used_at: new Date() },
    });
  }

  /**
   * E-posta doğrulama durumunu güncelle
   */
  async verifyEmail(authUserId: string) {
    return prisma.authUser.update({
      where: { auth_user_id: authUserId },
      data: { email_verified: true },
    });
  }

  /**
   * Application ID oluştur (01, 02, 03...)
   */
  async generateApplicationId(): Promise<string> {
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
  async update(authUserId: string, data: {
    email?: string;
    phone?: string;
    password_hash?: string;
  }) {
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
  async updateProfile(authUserId: string, data: {
    first_name?: string;
    last_name?: string;
  }) {
    return prisma.userProfile.update({
      where: { auth_user_id: authUserId },
      data,
    });
  }

  /**
   * Kullanıcıyı sil (soft delete - is_active = false)
   */
  async delete(authUserId: string) {
    return prisma.authUser.update({
      where: { auth_user_id: authUserId },
      data: { is_active: false },
    });
  }

  /**
   * Token'ı blacklist'e ekle (logout için)
   */
  async blacklistToken(data: {
    auth_user_id: string;
    token_hash: string;
    expires_at: Date;
    metadata?: Prisma.InputJsonValue;
  }) {
    // Eğer token zaten blacklist'te varsa, yeni bir kayıt oluşturma
    const existingToken = await prisma.authToken.findUnique({
      where: { token_hash: data.token_hash },
    });

    if (existingToken) {
      // Zaten var, güncelleme yapma (idempotent)
      return existingToken;
    }

    return prisma.authToken.create({
      data: {
        ...data,
        token_type: 'LOGOUT_BLACKLIST',
        is_single_use: false,
      },
    });
  }

  /**
   * Token blacklist'te mi kontrol et
   */
  async isTokenBlacklisted(tokenHash: string): Promise<boolean> {
    const token = await prisma.authToken.findUnique({
      where: { token_hash: tokenHash },
      select: {
        token_type: true,
        expires_at: true,
      },
    });

    if (!token) {
      return false;
    }

    // LOGOUT_BLACKLIST tipindeyse ve henüz expire olmamışsa blacklist'te
    if (token.token_type === 'LOGOUT_BLACKLIST' && token.expires_at > new Date()) {
      return true;
    }

    return false;
  }
}

