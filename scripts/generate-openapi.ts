import { generateOpenApiJson } from '../src/core/openapi/openApiBuilder.js';

// OpenAPI route tanımlarını import et (side-effect)
import '../src/modules/auth/auth.routes.openapi.js';

/**
 * OpenAPI JSON dosyasını generate eder
 * Usage: npx ts-node scripts/generate-openapi.ts [output-path]
 * 
 * Example:
 *   npm run openapi:generate
 *   npm run openapi:generate ./dist/openapi.json
 */

const outputPath = process.argv[2] || './openapi.json';

generateOpenApiJson(outputPath)
  .then(() => {
    console.log('✅ OpenAPI JSON başarıyla oluşturuldu!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ OpenAPI JSON oluşturulurken hata:', error);
    process.exit(1);
  });

