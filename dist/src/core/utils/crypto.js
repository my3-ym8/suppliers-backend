// Şifre hash'leme, doğrulama, UUID ve token oluşturma fonksiyonları
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
const SALT_ROUNDS = 10;
/**
 * Şifreyi hash'le
 */
export const hashPassword = async (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
};
/**
 * Şifreyi doğrula
 */
export const verifyPassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};
/**
 * UUID oluştur
 */
export const generateUuid = () => {
    return uuidv4();
};
/**
 * Token hash oluştur (auth_tokens tablosu için)
 */
export const hashToken = (token) => {
    return crypto.createHash('sha256').update(token).digest('hex');
};
/**
 * Random token oluştur
 */
export const generateToken = () => {
    return crypto.randomBytes(32).toString('hex');
};
//# sourceMappingURL=crypto.js.map