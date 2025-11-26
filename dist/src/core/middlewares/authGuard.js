import jwt from 'jsonwebtoken';
import env from '../../config/env.ts';
import { UnauthorizedException } from '../http/httpException.ts';
import prisma from '../prisma.ts';
import { logger } from '../../config/logger.ts';
export const authGuard = async (req, _res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Token bulunamadı');
        }
        const [scheme, rawToken] = authHeader.split(' ').filter(Boolean);
        if (!scheme || scheme.toLowerCase() !== 'bearer' || !rawToken) {
            throw new UnauthorizedException('Token bulunamadı');
        }
        const token = rawToken.trim();
        if (!token) {
            throw new UnauthorizedException('Token bulunamadı');
        }
        // JWT decode
        const decoded = jwt.verify(token, env.JWT_SECRET);
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
    }
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            logger.warn(`JWT doğrulama hatası: ${error.message}`);
            next(new UnauthorizedException('Geçersiz token'));
            return;
        }
        next(error);
    }
};
//# sourceMappingURL=authGuard.js.map