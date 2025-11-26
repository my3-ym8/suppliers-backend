// Environment variable'ları yükler ve tip güvenli erişim sağlar (.env dosyasından)
import dotenv from 'dotenv';

// .env dosyasını yükle
dotenv.config();

/**
 * Environment variables
 */
const env = {
  // Server
  PORT: process.env.PORT || '4000',
  NODE_ENV: process.env.NODE_ENV || 'development',

  // JWT
  JWT_SECRET: process.env.JWT_SECRET_KEY || process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET_KEY || 'your-refresh-secret-key-change-in-production',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '30d',

  // Superadmin
  SUPERADMIN_EMAIL: process.env.SUPERADMIN_EMAIL || 'admin@example.com',
  SUPERADMIN_MASTER_KEY: process.env.SUPERADMIN_MASTER_KEY || '',

  // Database
  DATABASE_URL: process.env.DATABASE_URL || '',
};

// Gerekli environment variable'ları kontrol et
if (!env.DATABASE_URL) {
  console.warn('⚠️  DATABASE_URL environment variable is not set!');
}

if (env.NODE_ENV === 'production') {
  if (env.JWT_SECRET === 'your-secret-key-change-in-production') {
    throw new Error('❌ JWT_SECRET_KEY must be set in production!');
  }
  if (!env.JWT_REFRESH_SECRET || env.JWT_REFRESH_SECRET === 'your-refresh-secret-key-change-in-production') {
    throw new Error('❌ JWT_REFRESH_SECRET_KEY must be set in production!');
  }
}

export default env;
