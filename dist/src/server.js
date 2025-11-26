// HTTP sunucusunu başlatır ve belirtilen port'ta dinler
import app from './app.ts';
import env from './config/env.ts';
import { logger } from './config/logger.ts';
const PORT = parseInt(env.PORT, 10) || 4000;
app.listen(PORT, () => {
    logger.info(`🚀 Server running on http://localhost:${PORT}`);
    logger.info(`🔍 Health check: http://localhost:${PORT}/health`);
});
//# sourceMappingURL=server.js.map