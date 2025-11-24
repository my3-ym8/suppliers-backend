import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../http/httpException.ts';
import { HttpStatus } from '../http/httpStatus.ts';
import { ZodError } from 'zod';
import { logger } from '../../config/logger.ts';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Zod validation error
  if (err instanceof ZodError) {
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: 'Validation error',
      errors: err.issues.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // HttpException
  if (err instanceof HttpException) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.details && { details: err.details }),
    });
  }

  // Prisma errors
  if (err.name === 'PrismaClientKnownRequestError') {
    // @ts-expect-error - Prisma error types
    if (err.code === 'P2002') {
      return res.status(HttpStatus.CONFLICT).json({
        success: false,
        message: 'Unique constraint violation',
        // @ts-expect-error
        field: err.meta?.target,
      });
    }
  }

  // Unknown error
  logger.error('Unhandled error:', err);
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

