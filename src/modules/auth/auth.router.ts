// Auth router: Authentication endpoint'lerini tanımlar (/register, /login, /verify-email, /logout)
import { Router } from 'express';
import { AuthController } from './auth.controller.ts';
import { AuthService } from './auth.service.ts';
import { AuthRepository } from './auth.repository.ts';
import { validateRequest } from '../../core/middlewares/validateRequest.ts';
import { authGuard } from '../../core/middlewares/authGuard.ts';
import { roleGuard } from '../../core/middlewares/roleGuard.ts';
import { onlySuperAdmin } from '../../core/middlewares/onlySuperAdmin.ts';
import { loginRateLimiter } from '../../core/middlewares/rateLimiter.ts';
import { registerSchema, loginSchema, verifyEmailSchema, updateSchema } from './auth.dto.ts';

const router = Router();

// Dependencies
const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

// Register endpoint (Public - supplier ve customer için)
router.post('/register', validateRequest(registerSchema), authController.register);

// Admin register endpoint (Sadece süperadmin - authGuard + onlySuperAdmin ile korumalı)
router.post('/register/admin', authGuard, onlySuperAdmin, validateRequest(registerSchema), authController.register);

// Login endpoint (Rate limiter ile korumalı - brute force saldırılarına karşı)
router.post('/login', loginRateLimiter, validateRequest(loginSchema), authController.login);

// Verify Email endpoint
router.post('/verify-email', validateRequest(verifyEmailSchema), authController.verifyEmail);

// Logout endpoint (authGuard ile korumalı)
router.post('/logout', authGuard, authController.logout);

// Update endpoint (authGuard ile korumalı)
router.put('/update/:userId', authGuard, validateRequest(updateSchema), authController.update);

// Delete endpoint (authGuard ile korumalı)
router.delete('/delete/:userId', authGuard, authController.delete);

// Get all users endpoint (authGuard ve roleGuard ile korumalı)
router.get('/users', authGuard, roleGuard('admin', 'superadmin'), authController.getAllUsers);

// Get user by id endpoint (authGuard ve roleGuard ile korumalı)
router.get('/users/:userId', authGuard, roleGuard('admin', 'superadmin'), authController.getUserById);

// Superadmin endpoint'leri (onlySuperAdmin middleware ile korumalı)
router.get('/superadmin/dashboard', authGuard, onlySuperAdmin, authController.getSuperadminDashboard);

export default router;

