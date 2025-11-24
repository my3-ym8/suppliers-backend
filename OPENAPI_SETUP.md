# OpenAPI Otomatik Dokümantasyon Kurulumu

Bu proje, **Zod** şemalarından otomatik olarak **Swagger/OpenAPI** dokümantasyonu oluşturmak için `zod-openapi` kullanıyor.

## 📦 Kurulu Paketler

- `zod-openapi` - Zod şemalarını OpenAPI'ye çevirir
- `swagger-ui-express` - Swagger UI'ı sunar

## 🚀 Kullanım

### 1. DTO Oluşturma

Zod şemalarınızı oluştururken `.meta()` metodunu kullanarak OpenAPI metadata ekleyin:

```typescript
import { z } from 'zod';
import 'zod-openapi'; // TypeScript type definitions için

export const registerSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email()
      .meta({ description: 'Kullanıcı e-posta adresi', example: 'user@example.com' }),
    password: z
      .string()
      .min(8)
      .meta({ description: 'Kullanıcı şifresi', example: 'SecurePass123!' }),
  }),
});
```

### 2. Response Şemaları

Response şemalarını da Zod ile tanımlayın:

```typescript
export const registerResponseSchema = z.object({
  success: z.boolean().meta({ example: true }),
  message: z.string().meta({ example: 'Kayıt başarılı' }),
  data: z.object({
    user: z.object({
      id: z.string().uuid(),
      email: z.string().email(),
    }),
  }),
});
```

### 3. Route Tanımları

Her modül için bir `*.routes.openapi.ts` dosyası oluşturun:

```typescript
// src/modules/auth/auth.routes.openapi.ts
import type { ZodOpenApiPathsObject } from 'zod-openapi';
import { registerSchema, registerResponseSchema } from './auth.dto.js';

export const authPaths: ZodOpenApiPathsObject = {
  '/api/auth/register': {
    post: {
      summary: 'Kullanıcı kaydı',
      description: 'Yeni bir kullanıcı hesabı oluşturur.',
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
      },
    },
  },
};
```

### 4. Router Kullanımı

Router dosyasında sadece route tanımlarını import edin (manuel @swagger yorumları gerekmez):

```typescript
// src/modules/auth/auth.router.ts
import { Router } from 'express';
import { validateRequest } from '../../core/middlewares/validateRequest.js';
import { registerSchema } from './auth.dto.js';

// OpenAPI route tanımlarını import et
import './auth.routes.openapi.js';

const router = Router();

router.post('/register', validateRequest(registerSchema), controller.register);

export default router;
```

### 5. Yeni Modül Ekleme

Yeni bir modül için:

1. DTO dosyası oluştur (`.meta()` ile OpenAPI metadata ekle)
2. `*.routes.openapi.ts` dosyası oluştur
3. `src/core/openapi/openApiBuilder.ts` içinde path'leri birleştir:

```typescript
import { userPaths } from '../../modules/users/users.routes.openapi.js';

export function buildOpenApiDocument() {
  const paths: ZodOpenApiPathsObject = {
    ...authPaths,
    ...userPaths, // Yeni modül
  };
  // ...
}
```

## 📄 OpenAPI JSON Generate Etme

Build sırasında OpenAPI JSON oluşturmak için:

```bash
npm run openapi:generate
```

Veya özel bir çıktı yolu ile:

```bash
npm run openapi:generate ./dist/openapi.json
```

## 🌐 Swagger UI

Swagger dokümantasyonu `/docs` endpoint'inde mevcut:

```
http://localhost:3000/docs
```

## ✅ Avantajlar

- ✅ Manuel `@swagger` yorumları yazmaya gerek yok
- ✅ DTO ve dokümantasyon tek kaynakta (Single Source of Truth)
- ✅ Type-safe - TypeScript ile tam uyumlu
- ✅ Otomatik güncelleme - DTO değişince dokümantasyon otomatik güncellenir
- ✅ Clean code - Router'lar temiz ve okunabilir

