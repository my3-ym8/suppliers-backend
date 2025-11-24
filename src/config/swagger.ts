import { buildOpenApiDocument } from '../core/openapi/openApiBuilder.ts';

/**
 * OpenAPI dokümanını oluşturur
 * zod-openapi ile otomatik oluşturulur
 */
const swaggerSpec = buildOpenApiDocument();

export default swaggerSpec;

