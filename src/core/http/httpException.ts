// HTTP exception sınıfları: Özel hata türleri için exception class'ları (BadRequest, Unauthorized, Conflict, vb.)
import { HttpStatus } from './httpStatus.ts';

export class HttpException extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'HttpException';
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string, details?: unknown) {
    super(HttpStatus.BAD_REQUEST, message, details);
    this.name = 'BadRequestException';
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string = 'Unauthorized', details?: unknown) {
    super(HttpStatus.UNAUTHORIZED, message, details);
    this.name = 'UnauthorizedException';
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string = 'Forbidden', details?: unknown) {
    super(HttpStatus.FORBIDDEN, message, details);
    this.name = 'ForbiddenException';
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string = 'Not Found', details?: unknown) {
    super(HttpStatus.NOT_FOUND, message, details);
    this.name = 'NotFoundException';
  }
}

export class ConflictException extends HttpException {
  constructor(message: string, details?: unknown) {
    super(HttpStatus.CONFLICT, message, details);
    this.name = 'ConflictException';
  }
}

export class UnprocessableEntityException extends HttpException {
  constructor(message: string, details?: unknown) {
    super(HttpStatus.UNPROCESSABLE_ENTITY, message, details);
    this.name = 'UnprocessableEntityException';
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(message: string = 'Internal Server Error', details?: unknown) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message, details);
    this.name = 'InternalServerErrorException';
  }
}

