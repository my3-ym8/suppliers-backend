// HTTP exception sınıfları: Özel hata türleri için exception class'ları (BadRequest, Unauthorized, Conflict, vb.)
import { HttpStatus } from './httpStatus.ts';
export class HttpException extends Error {
    statusCode;
    message;
    details;
    constructor(statusCode, message, details) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
        this.name = 'HttpException';
        Error.captureStackTrace(this, this.constructor);
    }
}
export class BadRequestException extends HttpException {
    constructor(message, details) {
        super(HttpStatus.BAD_REQUEST, message, details);
        this.name = 'BadRequestException';
    }
}
export class UnauthorizedException extends HttpException {
    constructor(message = 'Unauthorized', details) {
        super(HttpStatus.UNAUTHORIZED, message, details);
        this.name = 'UnauthorizedException';
    }
}
export class ForbiddenException extends HttpException {
    constructor(message = 'Forbidden', details) {
        super(HttpStatus.FORBIDDEN, message, details);
        this.name = 'ForbiddenException';
    }
}
export class NotFoundException extends HttpException {
    constructor(message = 'Not Found', details) {
        super(HttpStatus.NOT_FOUND, message, details);
        this.name = 'NotFoundException';
    }
}
export class ConflictException extends HttpException {
    constructor(message, details) {
        super(HttpStatus.CONFLICT, message, details);
        this.name = 'ConflictException';
    }
}
export class UnprocessableEntityException extends HttpException {
    constructor(message, details) {
        super(HttpStatus.UNPROCESSABLE_ENTITY, message, details);
        this.name = 'UnprocessableEntityException';
    }
}
export class InternalServerErrorException extends HttpException {
    constructor(message = 'Internal Server Error', details) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message, details);
        this.name = 'InternalServerErrorException';
    }
}
//# sourceMappingURL=httpException.js.map