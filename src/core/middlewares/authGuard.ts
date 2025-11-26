// Authentication guard: JWT token'ı doğrular ve request'e user bilgisini ekler
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from '../../config/env.ts';
import { UnauthorizedException } from '../http/httpException.ts';
import prisma from '../prisma.ts';
import { hashToken } from '../utils/crypto.ts';

export interface AuthRequest extends Request {
  user?: {
    auth_user_id: string;
    email: string;
    role: string;
    is_superadmin: boolean;
  };
}

export const authGuard = async (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token bulunamadı');
    }

    const token = authHeader.substring(7);

    // Token boş mu kontrol et
    if (!token || token.trim().length === 0) {
      throw new UnauthorizedException('Token boş');
    }

    // Token blacklist kontrolü - token logout ile blacklist'e eklenmiş mi?
    const tokenHash = hashToken(token);
    const blacklistedToken = await prisma.authToken.findUnique({
      where: { token_hash: tokenHash },
      select: {
        token_type: true,
        expires_at: true,
      },
    });

    if (blacklistedToken && blacklistedToken.token_type === 'LOGOUT_BLACKLIST' && blacklistedToken.expires_at > new Date()) {
      throw new UnauthorizedException('Bu token geçersiz kılınmıştır. Lütfen tekrar giriş yapın.');
    }

    // JWT secret kontrolü
    if (!env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set');
    }

    // Development modunda debug bilgisi
    if (process.env.NODE_ENV === 'development') {
      console.log('[AuthGuard] Token alındı, doğrulanıyor...');
      console.log('[AuthGuard] JWT_SECRET var mı:', !!env.JWT_SECRET);
      console.log('[AuthGuard] Token uzunluğu:', token.length);
    }

    // JWT decode ve verify
    let decoded: {
      id?: string;
      auth_user_id?: string;
      email?: string;
      role?: string;
      is_superadmin?: boolean;
    };

    try {
      decoded = jwt.verify(token, env.JWT_SECRET) as {
        id?: string;
        auth_user_id?: string;
        email?: string;
        role?: string;
        is_superadmin?: boolean;
      };
      
      if (process.env.NODE_ENV === 'development') {
        console.log('[AuthGuard] Token başarıyla doğrulandı');
        console.log('[AuthGuard] Decoded user ID:', decoded.auth_user_id || decoded.id);
      }
    } catch (jwtError: any) {
      // Development modunda detaylı hata logu
      if (process.env.NODE_ENV === 'development') {
        console.error('[AuthGuard] JWT Verification Error:', {
          name: jwtError.name,
          message: jwtError.message,
          stack: jwtError.stack,
        });
      }
      
      // JWT hata tiplerini kontrol et
      if (jwtError.name === 'TokenExpiredError' || jwtError instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('Token süresi dolmuş');
      } else if (jwtError.name === 'JsonWebTokenError' || jwtError instanceof jwt.JsonWebTokenError) {
        throw new UnauthorizedException('Geçersiz token');
      } else if (jwtError.name === 'NotBeforeError' || jwtError instanceof jwt.NotBeforeError) {
        throw new UnauthorizedException('Token henüz geçerli değil');
      } else {
        throw new UnauthorizedException(`Token doğrulama hatası: ${jwtError.message || 'Bilinmeyen hata'}`);
      }
    }

    // Token'dan auth_user_id'yi al (id veya auth_user_id olabilir)
    const authUserId = decoded.auth_user_id || decoded.id;

    if (!authUserId) {
      throw new UnauthorizedException('Token\'da kullanıcı bilgisi bulunamadı');
    }

    // Kullanıcıyı veritabanından kontrol et
    const user = await prisma.authUser.findUnique({
      where: { auth_user_id: authUserId },
      select: {
        auth_user_id: true,
        email: true,
        role: true,
        is_superadmin: true,
        is_active: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Kullanıcı bulunamadı');
    }

    if (!user.is_active) {
      throw new UnauthorizedException('Hesabınız aktif değil');
    }

    // Request'e user bilgisini ekle
    req.user = {
      auth_user_id: user.auth_user_id,
      email: user.email,
      role: user.role,
      is_superadmin: user.is_superadmin,
    };

    next();
  } catch (error: any) {
    // UnauthorizedException zaten doğru formatta, direkt next'e gönder
    if (error instanceof UnauthorizedException) {
      return next(error);
    } 
    
    // JWT hataları
    if (error instanceof jwt.JsonWebTokenError || 
        error instanceof jwt.TokenExpiredError || 
        error instanceof jwt.NotBeforeError ||
        error?.name === 'JsonWebTokenError' ||
        error?.name === 'TokenExpiredError' ||
        error?.name === 'NotBeforeError') {
      return next(new UnauthorizedException('Geçersiz token'));
    }
    
    // Beklenmeyen hatalar için
    if (process.env.NODE_ENV === 'development') {
      console.error('[AuthGuard] Beklenmeyen hata:', error);
    }
    return next(new UnauthorizedException('Kimlik doğrulama hatası'));
  }
};

