import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from '../../config/env.ts';
import { UnauthorizedException } from '../http/httpException.ts';
import prisma from '../prisma.ts';

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
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token bulunamadı');
    }

    const token = authHeader.substring(7);

    // JWT decode
    const decoded = jwt.verify(token, env.JWT_SECRET) as {
      auth_user_id: string;
      email: string;
      role: string;
      is_superadmin: boolean;
    };

    // Süper admin kontrolü (.env'den)
    if (decoded.is_superadmin) {
      if (decoded.email !== env.SUPERADMIN_EMAIL) {
        throw new UnauthorizedException('Geçersiz süper admin');
      }
    }

    // Kullanıcıyı veritabanından kontrol et
    const user = await prisma.authUser.findUnique({
      where: { auth_user_id: decoded.auth_user_id },
      select: {
        auth_user_id: true,
        email: true,
        role: true,
        is_superadmin: true,
        is_active: true,
      },
    });

    if (!user || !user.is_active) {
      throw new UnauthorizedException('Kullanıcı bulunamadı veya aktif değil');
    }

    // Request'e user bilgisini ekle
    req.user = {
      auth_user_id: user.auth_user_id,
      email: user.email,
      role: user.role,
      is_superadmin: user.is_superadmin,
    };

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedException('Geçersiz token'));
    } else {
      next(error);
    }
  }
};

