import { z } from 'zod';
/**
 * Kayıt DTO
 */
export declare const registerSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        role: z.ZodDefault<z.ZodEnum<{
            customer: "customer";
            supplier: "supplier";
            admin: "admin";
        }>>;
        first_name: z.ZodString;
        last_name: z.ZodString;
        kvkk_accepted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RegisterDto = z.infer<typeof registerSchema>['body'];
/**
 * Kayıt Response DTO
 */
export declare const registerResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    data: z.ZodObject<{
        user: z.ZodObject<{
            auth_user_id: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<{
                customer: "customer";
                supplier: "supplier";
                admin: "admin";
                superadmin: "superadmin";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Giriş DTO
 */
export declare const loginSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
        masterKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LoginDto = z.infer<typeof loginSchema>['body'];
/**
 * Giriş Response DTO
 */
export declare const loginResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    data: z.ZodObject<{
        user: z.ZodObject<{
            auth_user_id: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<{
                customer: "customer";
                supplier: "supplier";
                admin: "admin";
                superadmin: "superadmin";
            }>;
        }, z.core.$strip>;
        accessToken: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Hata Response DTO (ortak)
 */
export declare const errorResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * E-posta doğrulama DTO
 */
export declare const verifyEmailSchema: z.ZodObject<{
    body: z.ZodObject<{
        token: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * E-posta doğrulama Response DTO
 */
export declare const verifyEmailResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
}, z.core.$strip>;
/**
 * Logout Response DTO
 */
export declare const logoutResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
}, z.core.$strip>;
/**
 * Kullanıcı güncelleme DTO
 */
export declare const updateSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        first_name: z.ZodOptional<z.ZodString>;
        last_name: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateDto = z.infer<typeof updateSchema>['body'];
//# sourceMappingURL=auth.dto.d.ts.map