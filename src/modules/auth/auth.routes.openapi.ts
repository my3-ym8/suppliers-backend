import type { ZodOpenApiPathsObject } from 'zod-openapi';
import {
  registerSchema,
  registerResponseSchema,
  loginSchema,
  loginResponseSchema,
  verifyEmailSchema,
  verifyEmailResponseSchema,
  errorResponseSchema,
} from './auth.dto.ts';

/**
 * Auth modülü route spesifikasyonları
 * Bu dosya, zod-openapi ile OpenAPI path tanımlarını içerir
 */
export const authPaths: ZodOpenApiPathsObject = {
  '/api/auth/register': {
    post: {
      summary: 'Kullanıcı kaydı',
      description: 'Yeni bir kullanıcı hesabı oluşturur. E-posta doğrulama tokenı gönderilir.',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: registerSchema.shape.body,
          },
        },
      },
      responses: {
        '201': {
          description: 'Kayıt başarılı',
          content: {
            'application/json': {
              schema: registerResponseSchema,
            },
          },
        },
        '409': {
          description: 'E-posta zaten kullanılıyor',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
        '422': {
          description: 'Validation hatası',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
      },
    },
  },

  '/api/auth/login': {
    post: {
      summary: 'Kullanıcı girişi',
      description: 'E-posta ve şifre ile kullanıcı girişi yapar. Başarılı girişte JWT token döner.',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: loginSchema.shape.body,
          },
        },
      },
      responses: {
        '200': {
          description: 'Giriş başarılı',
          content: {
            'application/json': {
              schema: loginResponseSchema,
            },
          },
        },
        '401': {
          description: 'E-posta veya şifre hatalı',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
        '422': {
          description: 'Validation hatası',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
      },
    },
  },

  '/api/auth/verify-email': {
    post: {
      summary: 'E-posta doğrulama',
      description: 'E-posta doğrulama tokenı ile kullanıcı e-postasını doğrular.',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: verifyEmailSchema.shape.body,
          },
        },
      },
      responses: {
        '200': {
          description: 'E-posta doğrulandı',
          content: {
            'application/json': {
              schema: verifyEmailResponseSchema,
            },
          },
        },
        '400': {
          description: 'Geçersiz token',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
        '422': {
          description: 'Validation hatası',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
      },
    },
  },
};
