import { Response, NextFunction } from 'express';
import { AuthRequest } from './authGuard.ts';
export declare const roleGuard: (...allowedRoles: string[]) => (req: AuthRequest, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=roleGuard.d.ts.map