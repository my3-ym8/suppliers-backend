/**
 * Şifreyi hash'le
 */
export declare const hashPassword: (password: string) => Promise<string>;
/**
 * Şifreyi doğrula
 */
export declare const verifyPassword: (password: string, hash: string) => Promise<boolean>;
/**
 * UUID oluştur
 */
export declare const generateUuid: () => string;
/**
 * Token hash oluştur (auth_tokens tablosu için)
 */
export declare const hashToken: (token: string) => string;
/**
 * Random token oluştur
 */
export declare const generateToken: () => string;
//# sourceMappingURL=crypto.d.ts.map