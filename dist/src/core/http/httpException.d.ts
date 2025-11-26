export declare class HttpException extends Error {
    statusCode: number;
    message: string;
    details?: unknown | undefined;
    constructor(statusCode: number, message: string, details?: unknown | undefined);
}
export declare class BadRequestException extends HttpException {
    constructor(message: string, details?: unknown);
}
export declare class UnauthorizedException extends HttpException {
    constructor(message?: string, details?: unknown);
}
export declare class ForbiddenException extends HttpException {
    constructor(message?: string, details?: unknown);
}
export declare class NotFoundException extends HttpException {
    constructor(message?: string, details?: unknown);
}
export declare class ConflictException extends HttpException {
    constructor(message: string, details?: unknown);
}
export declare class UnprocessableEntityException extends HttpException {
    constructor(message: string, details?: unknown);
}
export declare class InternalServerErrorException extends HttpException {
    constructor(message?: string, details?: unknown);
}
//# sourceMappingURL=httpException.d.ts.map