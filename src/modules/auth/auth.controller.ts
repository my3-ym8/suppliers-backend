import { Response, NextFunction } from 'express';
import { AuthService } from './auth.service.ts';
import { RegisterDto, LoginDto } from './auth.dto.ts';
import { HttpStatus } from '../../core/http/httpStatus.ts';
import { AuthRequest } from '../../core/middlewares/authGuard.ts';

export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Kullanıcı kaydı
   */
  register = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.register(req.body as RegisterDto);

      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Kayıt başarılı',
        data: result,
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
        data: result,
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
}

