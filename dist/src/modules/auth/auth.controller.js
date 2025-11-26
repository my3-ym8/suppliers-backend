import { HttpStatus } from '../../core/http/httpStatus.ts';
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * Kullanıcı kaydı
     * Not: Admin rolü için sadece süperadmin kayıt yapabilir
     */
    register = async (req, res, next) => {
        try {
            // Admin rolü kontrolü: Eğer admin kaydı yapılıyorsa, requesterUserId gereklidir
            const requesterUserId = req.user?.auth_user_id;
            const result = await this.authService.register(req.body, requesterUserId);
            res.status(HttpStatus.CREATED).json({
                success: true,
                message: 'Kayıt başarılı',
                data: {
                    user: result.user,
                    accessToken: result.accessToken,
                    verificationToken: result.verificationToken, // Production'da e-posta ile gönderilir
                },
            });
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * Kullanıcı girişi
     */
    login = async (req, res, next) => {
        try {
            const result = await this.authService.login(req.body);
            res.status(HttpStatus.OK).json({
                success: true,
                message: 'Giriş başarılı',
                data: {
                    user: result.user,
                    accessToken: result.accessToken,
                },
            });
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * E-posta doğrulama
     */
    verifyEmail = async (req, res, next) => {
        try {
            const { token } = req.body;
            const result = await this.authService.verifyEmail(token);
            res.status(HttpStatus.OK).json({
                success: true,
                message: result.message,
            });
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * Kullanıcı çıkışı
     */
    logout = async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Kullanıcı bilgisi bulunamadı',
                });
            }
            const result = await this.authService.logout(req.user.auth_user_id);
            return res.status(HttpStatus.OK).json({
                success: true,
                message: result.message,
            });
        }
        catch (error) {
            return next(error);
        }
    };
    /**
     * Kullanıcı güncelleme
     */
    update = async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Kullanıcı bilgisi bulunamadı',
                });
            }
            const { userId } = req.params;
            if (!userId) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    success: false,
                    message: 'Kullanıcı ID\'si gereklidir',
                });
            }
            // Güvenlik kontrolü: Kullanıcı sadece kendi bilgilerini güncelleyebilir
            // (Admin/superadmin kontrolü eklenebilir)
            if (userId !== req.user.auth_user_id && !req.user.is_superadmin) {
                return res.status(HttpStatus.FORBIDDEN).json({
                    success: false,
                    message: 'Bu işlem için yetkiniz bulunmamaktadır',
                });
            }
            const result = await this.authService.update(userId, req.body);
            return res.status(HttpStatus.OK).json({
                success: true,
                message: result.message,
                data: {
                    user: result.user,
                },
            });
        }
        catch (error) {
            return next(error);
        }
    };
    /**
     * Kullanıcı silme
     */
    delete = async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Kullanıcı bilgisi bulunamadı',
                });
            }
            const { userId } = req.params;
            if (!userId) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    success: false,
                    message: 'Kullanıcı ID\'si gereklidir',
                });
            }
            // Güvenlik kontrolü: Kullanıcı sadece kendi hesabını silebilir
            // (Admin/superadmin kontrolü eklenebilir)
            if (userId !== req.user.auth_user_id && !req.user.is_superadmin) {
                return res.status(HttpStatus.FORBIDDEN).json({
                    success: false,
                    message: 'Bu işlem için yetkiniz bulunmamaktadır',
                });
            }
            const result = await this.authService.delete(userId);
            return res.status(HttpStatus.OK).json({
                success: true,
                message: result.message,
            });
        }
        catch (error) {
            return next(error);
        }
    };
    /**
     * Tüm kullanıcıları getir
     */
    getAllUsers = async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Kullanıcı bilgisi bulunamadı',
                });
            }
            // Sadece superadmin tüm kullanıcıları görebilir
            // Normal kullanıcılar sadece aktif kullanıcıları görebilir
            const includeInactive = req.user.is_superadmin && req.query.includeInactive === 'true';
            const result = await this.authService.getAllUsers(includeInactive);
            return res.status(HttpStatus.OK).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            return next(error);
        }
    };
    /**
     * ID ile kullanıcı getir
     */
    getUserById = async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Kullanıcı bilgisi bulunamadı',
                });
            }
            const { userId } = req.params;
            if (!userId) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    success: false,
                    message: 'Kullanıcı ID\'si gereklidir',
                });
            }
            // Güvenlik kontrolü: Kullanıcı sadece kendi bilgilerini görebilir
            // Superadmin herkesi görebilir
            if (userId !== req.user.auth_user_id && !req.user.is_superadmin) {
                return res.status(HttpStatus.FORBIDDEN).json({
                    success: false,
                    message: 'Bu işlem için yetkiniz bulunmamaktadır',
                });
            }
            const result = await this.authService.getUserById(userId);
            return res.status(HttpStatus.OK).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            return next(error);
        }
    };
    /**
     * Süperadmin dashboard (sadece süperadmin erişebilir - onlySuperAdmin middleware ile korumalı)
     */
    getSuperadminDashboard = async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Kullanıcı bilgisi bulunamadı',
                });
            }
            // Bu endpoint'e sadece onlySuperAdmin middleware'i geçen kullanıcılar erişebilir
            // O yüzden burada ekstra kontrol gerekmez
            return res.status(HttpStatus.OK).json({
                success: true,
                message: 'Süperadmin dashboard',
                data: {
                    user: {
                        auth_user_id: req.user.auth_user_id,
                        email: req.user.email,
                        role: req.user.role,
                        is_superadmin: req.user.is_superadmin,
                    },
                },
            });
        }
        catch (error) {
            return next(error);
        }
    };
}
//# sourceMappingURL=auth.controller.js.map