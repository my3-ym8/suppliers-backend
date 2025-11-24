import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

const SALT_ROUNDS = 10;

/**
 * Şifreyi hash'le
 */
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Şifreyi doğrula
 */
export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

/**
 * UUID oluştur
 */
export const generateUuid = (): string => {
  return uuidv4();
};

/**
 * Token hash oluştur (auth_tokens tablosu için)
 */
export const hashToken = (token: string): string => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

/**
 * Random token oluştur
 */
export const generateToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

