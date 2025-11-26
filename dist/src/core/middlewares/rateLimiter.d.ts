/**
 * Genel Rate Limiter (Tüm endpoint'ler için)
 */
export declare const generalRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Login Rate Limiter (Brute force saldırılarına karşı özel koruma)
 *
 * - 15 dakikada maksimum 5 başarısız login denemesi
 * - Başarılı login sonrası limit sıfırlanır
 */
export declare const loginRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Süperadmin Login Rate Limiter (Daha sıkı kurallar)
 *
 * - 15 dakikada maksimum 3 başarısız deneme
 */
export declare const superadminLoginRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
//# sourceMappingURL=rateLimiter.d.ts.map