import { Response, NextFunction } from 'express';
import { ForbiddenException } from '../http/httpException.ts';
import { AuthRequest } from './authGuard.ts';

export const roleGuard = (...allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new ForbiddenException('Kullanıcı bilgisi bulunamadı'));
    }

    // Süper admin her şeyi yapabilir
    if (req.user.is_superadmin) {
      return next();
    }

    // Rol kontrolü
    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new ForbiddenException(
          `Bu işlem için yetkiniz yok. Gerekli roller: ${allowedRoles.join(', ')}`
        )
      );
    }

    next();
  };
};

