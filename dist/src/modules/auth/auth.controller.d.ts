import { Response, NextFunction } from 'express';
import { AuthService } from './auth.service.ts';
import { AuthRequest } from '../../core/middlewares/authGuard.ts';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    /**
     * Kullanıcı kaydı
     * Not: Admin rolü için sadece süperadmin kayıt yapabilir
     */
    register: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    /**
     * Kullanıcı girişi
     */
    login: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    /**
     * E-posta doğrulama
     */
    verifyEmail: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    /**
     * Kullanıcı çıkışı
     */
    logout: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    /**
     * Kullanıcı güncelleme
     */
    update: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    /**
     * Kullanıcı silme
     */
    delete: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    /**
     * Tüm kullanıcıları getir
     */
    getAllUsers: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    /**
     * ID ile kullanıcı getir
     */
    getUserById: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    /**
     * Süperadmin dashboard (sadece süperadmin erişebilir - onlySuperAdmin middleware ile korumalı)
     */
    getSuperadminDashboard: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map