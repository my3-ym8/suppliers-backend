import { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    user?: {
        auth_user_id: string;
        email: string;
        role: string;
        is_superadmin: boolean;
    };
}
export declare const authGuard: (req: AuthRequest, _res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=authGuard.d.ts.map