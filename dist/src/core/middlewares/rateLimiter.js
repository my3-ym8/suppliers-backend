// Rate Limiter Middleware: Brute force saldırılarına karşı koruma
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
const buildEmailAwareKey = (req, prefix = '') => {
    const ipSegment = ipKeyGenerator(req);
    const emailSegment = typeof req.body?.email === 'string'
        ? req.body.email.trim().toLowerCase()
        : '';
    if (prefix) {
        return emailSegment ? `${prefix}:${ipSegment}:${emailSegment}` : `${prefix}:${ipSegment}`;
    }
    return emailSegment ? `${ipSegment}:${emailSegment}` : ipSegment;
};
/**
 * Genel Rate Limiter (Tüm endpoint'ler için)
 */
export const generalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100, // Her IP için 15 dakikada maksimum 100 istek
    message: {
        success: false,
        message: 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.',
    },
    standardHeaders: true, // Rate limit bilgilerini `RateLimit-*` header'larında döndür
    legacyHeaders: false, // `X-RateLimit-*` header'larını devre dışı bırak
});
/**
 * Login Rate Limiter (Brute force saldırılarına karşı özel koruma)
 *
 * - 15 dakikada maksimum 5 başarısız login denemesi
 * - Başarılı login sonrası limit sıfırlanır
 */
export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: parseInt(process.env.LOGIN_RATE_LIMIT_MAX || '5'), // Varsayılan: 15 dakikada 5 deneme
    message: {
        success: false,
        message: 'Çok fazla başarısız giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.',
    },
    standardHeaders: true,
    legacyHeaders: false,
    // Rate limit key'i: IP + email kombinasyonu (daha güvenli)
    keyGenerator: (req) => buildEmailAwareKey(req),
    // Başarılı login sonrası limit sıfırlama için handler
    skipSuccessfulRequests: false, // Başarılı istekleri de say (güvenlik için)
    skipFailedRequests: false, // Başarısız istekleri de say
    // Özel error response
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: 'Çok fazla başarısız giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.',
            retryAfter: 15 * 60, // Saniye cinsinden
        });
    },
});
/**
 * Süperadmin Login Rate Limiter (Daha sıkı kurallar)
 *
 * - 15 dakikada maksimum 3 başarısız deneme
 */
export const superadminLoginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: parseInt(process.env.SUPERADMIN_LOGIN_RATE_LIMIT_MAX || '3'), // Varsayılan: 15 dakikada 3 deneme
    message: {
        success: false,
        message: 'Çok fazla başarısız süperadmin giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.',
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => buildEmailAwareKey(req, 'superadmin'),
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: 'Çok fazla başarısız süperadmin giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.',
            retryAfter: 15 * 60,
        });
    },
});
//# sourceMappingURL=rateLimiter.js.map