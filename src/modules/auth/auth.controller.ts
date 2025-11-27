// Auth controller: HTTP request/response işlemlerini yönetir (register, login, verifyEmail, logout endpoint'leri)
import { Response, NextFunction } from 'express';
import { AuthService } from './auth.service.ts';
import { RegisterDto, LoginDto } from './auth.dto.ts';
import { HttpStatus } from '../../core/http/httpStatus.ts';
import { AuthRequest } from '../../core/middlewares/authGuard.ts';
import env from '../../config/env.ts';

export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Kullanıcı kaydı (Public - supplier ve customer için)
   */
  register = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const registerData = req.body as RegisterDto;

      // Admin ve superadmin rolü kontrolü: Normal register endpoint'i bu roller için kullanılamaz
      if (registerData.role === 'admin') {
        return res.status(HttpStatus.FORBIDDEN).json({
          success: false,
          message: 'Admin kaydı için /register/admin endpoint\'ini kullanmalısınız',
        });
      }

      if (registerData.role === 'superadmin') {
        return res.status(HttpStatus.FORBIDDEN).json({
          success: false,
          message: 'Superadmin rolü kayıt edilemez',
        });
      }

      const result = await this.authService.register(registerData);

      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Kayıt başarılı',
        data: {
          user: result.user,
          accessToken: result.accessToken,
          verificationToken: result.verificationToken, // Production'da e-posta ile gönderilir
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Admin kaydı (Sadece süperadmin - authGuard + onlySuperAdmin ile korumalı)
   */
  registerAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      // Süperadmin kontrolü - middleware'lerden geçmiş olmalı ama ekstra kontrol
      if (!req.user) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Kullanıcı bilgisi bulunamadı. Bu işlem için giriş yapmanız gerekmektedir.',
        });
      }

      // Sıkı kontrol: is_superadmin KESINLIKLE true olmalı
      if (req.user.is_superadmin !== true) {
        return res.status(HttpStatus.FORBIDDEN).json({
          success: false,
          message: 'Bu işlem için süperadmin yetkisi gereklidir',
        });
      }

      // Email kontrolü - SUPERADMIN_EMAIL ile eşleşmeli
      if (!env.SUPERADMIN_EMAIL) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Süperadmin yapılandırması eksik',
        });
      }

      if (req.user.email !== env.SUPERADMIN_EMAIL) {
        return res.status(HttpStatus.FORBIDDEN).json({
          success: false,
          message: 'Geçersiz süperadmin email',
        });
      }

      const registerData = req.body as RegisterDto;
      
      // Admin rolü zorunlu, superadmin engellenmiş
      if (registerData.role === 'superadmin') {
        return res.status(HttpStatus.FORBIDDEN).json({
          success: false,
          message: 'Superadmin rolü kayıt edilemez',
        });
      }

      if (registerData.role !== 'admin') {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: 'Bu endpoint sadece admin kaydı için kullanılabilir',
        });
      }

      const result = await this.authService.register(registerData, req.user.auth_user_id);

      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Admin kaydı başarılı',
        data: {
          user: result.user,
          accessToken: result.accessToken,
          verificationToken: result.verificationToken,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Kullanıcı girişi
   */
  login = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.login(req.body as LoginDto);

      res.status(HttpStatus.OK).json({
        success: true,
        message: 'Giriş başarılı',
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * E-posta doğrulama
   */
  verifyEmail = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const { token } = req.body;
      const result = await this.authService.verifyEmail(token);

      res.status(HttpStatus.OK).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Kullanıcı çıkışı
   */
  logout = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Kullanıcı bilgisi bulunamadı',
        });
      }

      // Authorization header'dan token'ı al
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Token bulunamadı',
        });
      }

      const token = authHeader.substring(7); // "Bearer " kısmını çıkar

      // Token boş mu kontrol et
      if (!token || token.trim().length === 0) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Token boş',
        });
      }

      const result = await this.authService.logout(req.user.auth_user_id, token);

      return res.status(HttpStatus.OK).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Kullanıcı güncelleme
   */
  update = async (req: AuthRequest, res: Response, next: NextFunction) => {
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

      // Güvenlik kontrolü: Kullanıcı kendi bilgilerini, admin ve superadmin herkesi güncelleyebilir
      const isOwnAccount = userId === req.user.auth_user_id;
      const isAdmin = req.user.role === 'admin' || req.user.is_superadmin;
      
      if (!isOwnAccount && !isAdmin) {
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
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Kullanıcı silme
   */
  delete = async (req: AuthRequest, res: Response, next: NextFunction) => {
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

      // Güvenlik kontrolü: Kullanıcı kendi hesabını, admin ve superadmin herkesi silebilir
      const isOwnAccount = userId === req.user.auth_user_id;
      const isAdmin = req.user.role === 'admin' || req.user.is_superadmin;
      
      if (!isOwnAccount && !isAdmin) {
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
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Tüm kullanıcıları getir
   */
  getAllUsers = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Kullanıcı bilgisi bulunamadı',
        });
      }

      // Admin ve superadmin tüm kullanıcıları görebilir
      // roleGuard middleware'i zaten admin ve superadmin kontrolü yapıyor
      const includeInactive = (req.user.is_superadmin || req.user.role === 'admin') && req.query.includeInactive === 'true';
      
      const result = await this.authService.getAllUsers(includeInactive);

      return res.status(HttpStatus.OK).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * ID ile kullanıcı getir
   */
  getUserById = async (req: AuthRequest, res: Response, next: NextFunction) => {
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

      // Güvenlik kontrolü: Kullanıcı kendi bilgilerini, admin ve superadmin herkesi görebilir
      // roleGuard middleware'i zaten admin ve superadmin kontrolü yapıyor
      const isOwnAccount = userId === req.user.auth_user_id;
      const isAdmin = req.user.role === 'admin' || req.user.is_superadmin;
      
      if (!isOwnAccount && !isAdmin) {
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
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Süperadmin dashboard (sadece süperadmin erişebilir - onlySuperAdmin middleware ile korumalı)
   */
  getSuperadminDashboard = async (req: AuthRequest, res: Response, next: NextFunction) => {
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
    } catch (error) {
      return next(error);
    }
  };
}

