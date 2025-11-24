import { Router } from 'express';
import { AuthController } from './auth.controller.ts';
import { AuthService } from './auth.service.ts';
import { AuthRepository } from './auth.repository.ts';
import { validateRequest } from '../../core/middlewares/validateRequest.ts';
import { registerSchema, loginSchema, verifyEmailSchema } from './auth.dto.ts';

// OpenAPI route tanımlarını import et (zod-openapi için path'leri yükler)
import './auth.routes.openapi.ts';

const router = Router();

// Dependencies
const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

// Register endpoint
router.post('/register', validateRequest(registerSchema), authController.register);

// Login endpoint
router.post('/login', validateRequest(loginSchema), authController.login);

// Verify Email endpoint
router.post('/verify-email', validateRequest(verifyEmailSchema), authController.verifyEmail);

export default router;

