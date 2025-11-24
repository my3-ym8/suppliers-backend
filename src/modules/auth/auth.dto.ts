import { z } from 'zod';
// zod-openapi type definitions'ı import et (TypeScript için)
import 'zod-openapi';

/**
 * Kayıt DTO
 */
export const registerSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email('Geçerli bir e-posta adresi giriniz')
      .meta({ description: 'Kullanıcı e-posta adresi', example: 'tedarikci@example.com' }),
    password: z
      .string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .meta({ description: 'Kullanıcı şifresi (min 8 karakter)', example: 'SecurePass123!' }),
    phone: z
      .string()
      .optional()
      .meta({ description: 'Telefon numarası (opsiyonel)', example: '+905551234567' }),
    role: z
      .enum(['supplier', 'customer'], {
        message: 'Rol supplier veya customer olmalıdır',
      })
      .default('supplier')
      .meta({ description: 'Kullanıcı rolü', example: 'supplier', default: 'supplier' }),
    first_name: z
      .string()
      .min(2, 'İsim en az 2 karakter olmalıdır')
      .meta({ description: 'Kullanıcı adı', example: 'Ahmet' }),
    last_name: z
      .string()
      .min(2, 'Soyisim en az 2 karakter olmalıdır')
      .meta({ description: 'Kullanıcı soyadı', example: 'Yılmaz' }),
    kvkk_accepted: z
      .boolean()
      .refine((val) => val === true, {
      message: 'KVKK sözleşmesini kabul etmelisiniz',
      })
      .meta({ description: 'KVKK sözleşmesi kabul durumu', example: true }),
  }),
});

export type RegisterDto = z.infer<typeof registerSchema>['body'];

/**
 * Kayıt Response DTO
 */
export const registerResponseSchema = z.object({
  success: z.boolean().meta({ example: true }),
  message: z.string().meta({ example: 'Kayıt başarılı' }),
  data: z.object({
    user: z
      .object({
        auth_user_id: z.string().uuid(),
        email: z.string().email(),
        role: z.enum(['supplier', 'customer', 'admin', 'superadmin']),
      })
      .meta({ description: 'Oluşturulan kullanıcı bilgileri' }),
  }),
});

/**
 * Giriş DTO
 */
export const loginSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email('Geçerli bir e-posta adresi giriniz')
      .meta({ description: 'Kullanıcı e-posta adresi', example: 'tedarikci@example.com' }),
    password: z
      .string()
      .min(1, 'Şifre gereklidir')
      .meta({ description: 'Kullanıcı şifresi', example: 'SecurePass123!' }),
  }),
});

export type LoginDto = z.infer<typeof loginSchema>['body'];

/**
 * Giriş Response DTO
 */
export const loginResponseSchema = z.object({
  success: z.boolean().meta({ example: true }),
  message: z.string().meta({ example: 'Giriş başarılı' }),
  data: z.object({
    user: z
      .object({
        auth_user_id: z.string().uuid(),
        email: z.string().email(),
        role: z.enum(['supplier', 'customer', 'admin', 'superadmin']),
      })
      .meta({ description: 'Kullanıcı bilgileri' }),
    accessToken: z
      .string()
      .meta({
        description: 'JWT erişim tokenı',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      }),
  }),
});

/**
 * Hata Response DTO (ortak)
 */
export const errorResponseSchema = z.object({
  success: z.boolean().meta({ example: false }),
  message: z.string().meta({ example: 'Hata mesajı' }),
  errors: z
    .array(
      z.object({
        field: z.string(),
        message: z.string(),
      })
    )
    .optional()
    .meta({ description: 'Validation hataları (varsa)' }),
});

/**
 * E-posta doğrulama DTO
 */
export const verifyEmailSchema = z.object({
  body: z.object({
    token: z.string().meta({ description: 'E-posta doğrulama tokenı', example: 'abc123def456' }),
  }),
});

/**
 * E-posta doğrulama Response DTO
 */
export const verifyEmailResponseSchema = z.object({
  success: z.boolean().meta({ example: true }),
  message: z.string().meta({ example: 'E-posta başarıyla doğrulandı' }),
});
