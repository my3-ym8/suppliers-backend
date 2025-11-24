import { createDocument, type ZodOpenApiPathsObject } from 'zod-openapi';
import env from '../../config/env.ts';

// Tüm route tanımlarını import et (side-effect ile paths objesi oluşturulur)
import { authPaths } from '../../modules/auth/auth.routes.openapi.ts';

/**
 * OpenAPI dokümanını oluşturur
 */
export function buildOpenApiDocument(): any {
  const paths: ZodOpenApiPathsObject = {
    ...authPaths,
    // Diğer modüllerin path'leri buraya eklenecek
    // ...userPaths,
    // ...productPaths,
  };

  return createDocument(
    {
      openapi: '3.0.3',
      info: {
        title: 'Suppliers Backend API',
        version: '1.0.0',
        description: 'Tedarikçi yönetim sistemi API dokümantasyonu',
        contact: {
          name: 'API Support',
        },
      },
      servers: [
        {
          url: `http://localhost:${env.PORT}`,
          description: 'Development server',
        },
      ],
      paths,
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            description: 'JWT Bearer token ile kimlik doğrulama',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    {
      // OpenAPI generation options
      cycles: 'ref',
      reused: 'ref',
    }
  );
}

/**
 * OpenAPI JSON'ı dosyaya yazar (build script için)
 */
export async function generateOpenApiJson(outputPath: string = './openapi.json'): Promise<void> {
  const document = buildOpenApiDocument();
  const json = JSON.stringify(document, null, 2);

  const fs = await import('fs/promises');
  await fs.writeFile(outputPath, json, 'utf-8');

  console.log(`✅ OpenAPI JSON generated: ${outputPath}`);
}
