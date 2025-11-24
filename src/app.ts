import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.ts';
import apiRouter from './routes.ts';
import { errorHandler } from './core/middlewares/errorHandler.ts';
import { requestLogger } from './core/middlewares/requestLogger.ts';
import { logger } from './config/logger.ts';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use(requestLogger);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', apiRouter);

// Swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route bulunamadı',
  });
});

// Error handler (en son middleware)
app.use(errorHandler);

logger.info('Express app configured');

export default app;

