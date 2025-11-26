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
  // authGuard middleware'i çalışmış olmalı
  if (!req.user) {
    throw new ForbiddenException('Kullanıcı bilgisi bulunamadı');
  }

  // 1. Kontrol: JWT'deki user.is_superadmin === true
  if (!req.user.is_superadmin) {
    throw new ForbiddenException('Bu işlem için süperadmin yetkisi gereklidir');
  }

  // 2. Kontrol: JWT'deki user.email === SUPERADMIN_EMAIL
  if (req.user.email !== env.SUPERADMIN_EMAIL) {
    throw new ForbiddenException('Geçersiz süperadmin email');
  }

  // Her iki koşul da sağlandı → devam et
  next();
};

