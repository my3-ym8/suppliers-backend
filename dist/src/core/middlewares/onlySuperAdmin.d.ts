import { Response, NextFunction } from 'express';
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
export declare const onlySuperAdmin: (req: AuthRequest, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=onlySuperAdmin.d.ts.map