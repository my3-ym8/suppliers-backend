// Auth DTO: Zod şemaları ile request/response validation ve type definitions (register, login, verifyEmail, logout)
import { z } from 'zod';
/**
 * Kayıt DTO
 */
export const registerSchema = z.object({
    body: z.object({
        email: z
            .string()
            .email('Geçerli bir e-posta adresi giriniz'),
        password: z
            .string()
            .min(8, 'Şifre en az 8 karakter olmalıdır'),
        phone: z
            .string()
            .optional(),
        role: z
            .enum(['supplier', 'customer', 'admin'], {
            message: 'Rol supplier, customer veya admin olmalıdır',
        })
            .default('supplier'),
        first_name: z
            .string()
            .min(2, 'İsim en az 2 karakter olmalıdır'),
        last_name: z
            .string()
            .min(2, 'Soyisim en az 2 karakter olmalıdır'),
        kvkk_accepted: z
            .boolean()
            .refine((val) => val === true, {
            message: 'KVKK sözleşmesini kabul etmelisiniz',
        }),
    }),
});
/**
 * Kayıt Response DTO
 */
export const registerResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        user: z.object({
            auth_user_id: z.string().uuid(),
            email: z.string().email(),
            role: z.enum(['supplier', 'customer', 'admin', 'superadmin']),
        }),
    }),
});
/**
 * Giriş DTO
 */
export const loginSchema = z.object({
    body: z.object({
        email: z
            .string()
            .email('Geçerli bir e-posta adresi giriniz'),
        password: z
            .string()
            .min(1, 'Şifre gereklidir'),
        masterKey: z
            .string()
            .optional()
            .describe('Süperadmin için zorunlu master key'),
    }),
});
/**
 * Giriş Response DTO
 */
export const loginResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        user: z.object({
            auth_user_id: z.string().uuid(),
            email: z.string().email(),
            role: z.enum(['supplier', 'customer', 'admin', 'superadmin']),
        }),
        accessToken: z.string(),
    }),
});
/**
 * Hata Response DTO (ortak)
 */
export const errorResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    errors: z
        .array(z.object({
        field: z.string(),
        message: z.string(),
    }))
        .optional(),
});
/**
 * E-posta doğrulama DTO
 */
export const verifyEmailSchema = z.object({
    body: z.object({
        token: z.string(),
    }),
});
/**
 * E-posta doğrulama Response DTO
 */
export const verifyEmailResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
});
/**
 * Logout Response DTO
 */
export const logoutResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
});
/**
 * Kullanıcı güncelleme DTO
 */
export const updateSchema = z.object({
    body: z.object({
        email: z
            .string()
            .email('Geçerli bir e-posta adresi giriniz')
            .optional(),
        phone: z
            .string()
            .optional(),
        first_name: z
            .string()
            .min(2, 'İsim en az 2 karakter olmalıdır')
            .optional(),
        last_name: z
            .string()
            .min(2, 'Soyisim en az 2 karakter olmalıdır')
            .optional(),
        password: z
            .string()
            .min(8, 'Şifre en az 8 karakter olmalıdır')
            .optional(),
    }),
});
//# sourceMappingURL=auth.dto.js.map