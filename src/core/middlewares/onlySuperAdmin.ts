// Only SuperAdmin Middleware: Süperadmin endpoint'lerini korur
// JWT'deki is_superadmin ve email kontrolü yapar
import { Response, NextFunction } from 'express';
import env from '../../config/env.ts';
import { ForbiddenException } from '../http/httpException.ts';
import { AuthRequest } from './authGuard.ts';

/**
 * Only SuperAdmin Middleware
 * 
 * Bu middleware, süperadmin endpoint'lerini korur.
 * authGuard middleware'inden sonra kullanılmalıdır.
 * 
 * Kontroller:
 * 1. JWT'deki user.is_superadmin === true
 * 2. JWT'deki user.email === SUPERADMIN_EMAIL
 * 
 * Bu iki koşul sağlanmazsa → 403 Forbidden
 */
export const onlySuperAdmin = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    // authGuard middleware'i çalışmış olmalı
    if (!req.user) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[onlySuperAdmin] req.user yok - erişim reddedildi');
      }
      return next(new ForbiddenException('Kullanıcı bilgisi bulunamadı. Bu işlem için giriş yapmanız gerekmektedir.'));
    }

    // Debug log
    if (process.env.NODE_ENV === 'development') {
      console.log('[onlySuperAdmin] Kullanıcı kontrolü:', {
        email: req.user.email,
        is_superadmin: req.user.is_superadmin,
        role: req.user.role,
        required_email: env.SUPERADMIN_EMAIL,
      });
    }

    // 1. Kontrol: JWT'deki user.is_superadmin === true (KESINLIKLE true olmalı)
    if (req.user.is_superadmin !== true) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[onlySuperAdmin] is_superadmin false - erişim reddedildi');
      }
      return next(new ForbiddenException('Bu işlem için süperadmin yetkisi gereklidir'));
    }

    // 2. Kontrol: JWT'deki user.email === SUPERADMIN_EMAIL (KESINLIKLE eşleşmeli)
    if (!env.SUPERADMIN_EMAIL) {
      console.error('[onlySuperAdmin] SUPERADMIN_EMAIL environment variable is not set');
      return next(new ForbiddenException('Süperadmin yapılandırması eksik'));
    }

    if (req.user.email !== env.SUPERADMIN_EMAIL) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[onlySuperAdmin] Email eşleşmiyor - erişim reddedildi', {
          user_email: req.user.email,
          required_email: env.SUPERADMIN_EMAIL,
        });
      }
      return next(new ForbiddenException('Geçersiz süperadmin email'));
    }

    // Her iki koşul da sağlandı → devam et
    if (process.env.NODE_ENV === 'development') {
      console.log('[onlySuperAdmin] Süperadmin doğrulandı - erişim izni verildi');
    }
    next();
  } catch (error: any) {
    // Beklenmeyen hatalar için
    if (process.env.NODE_ENV === 'development') {
      console.error('[onlySuperAdmin] Hata:', error);
    }
    if (error instanceof ForbiddenException) {
      return next(error);
    }
    return next(new ForbiddenException('Yetkilendirme hatası'));
  }
};

