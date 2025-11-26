// Prisma Client instance'ı: Veritabanı bağlantısı ve query işlemleri için merkezi Prisma client
import { PrismaClient } from '../../generated/prisma/client.js';
import { logger } from '../config/logger.ts';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// Prisma 6'da standart PrismaClient kullanılır (adapter yok)
const prisma = new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

process.on('beforeExit', async () => {
  try {
    await prisma.$disconnect();
    // Sadece production'da veya hata durumunda log göster
    if (process.env.NODE_ENV === 'production') {
    logger.info('Prisma client disconnected');
    }
  } catch (error) {
    logger.error('Error disconnecting Prisma client', error);
  }
});

// Graceful shutdown için SIGTERM ve SIGINT handler'ları
process.on('SIGTERM', async () => {
  try {
    await prisma.$disconnect();
    logger.info('Prisma client disconnected (SIGTERM)');
    process.exit(0);
  } catch (error) {
    logger.error('Error disconnecting Prisma client', error);
    process.exit(1);
  }
});

process.on('SIGINT', async () => {
  try {
    await prisma.$disconnect();
    logger.info('Prisma client disconnected (SIGINT)');
    process.exit(0);
  } catch (error) {
    logger.error('Error disconnecting Prisma client', error);
    process.exit(1);
  }
});

export default prisma;
