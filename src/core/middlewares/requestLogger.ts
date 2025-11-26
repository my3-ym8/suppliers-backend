// Request logger middleware: Her HTTP isteğini loglar (method, URL, status code, süre)
import { Request, Response, NextFunction } from 'express';
import { logger } from '../../config/logger.ts';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};

