import { ForbiddenException } from '../http/httpException.ts';
export const roleGuard = (...allowedRoles) => {
    return (req, _res, next) => {
        if (!req.user) {
            return next(new ForbiddenException('Kullanıcı bilgisi bulunamadı'));
        }
        // Süper admin her şeyi yapabilir
        if (req.user.is_superadmin) {
            return next();
        }
        // Rol kontrolü
        if (!allowedRoles.includes(req.user.role)) {
            return next(new ForbiddenException(`Bu işlem için yetkiniz yok. Gerekli roller: ${allowedRoles.join(', ')}`));
        }
        next();
    };
};
//# sourceMappingURL=roleGuard.js.map