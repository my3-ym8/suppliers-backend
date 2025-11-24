// src/core/prisma.ts
import { PrismaClient } from '../../generated/prisma/client.ts';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { logger } from '../config/logger.ts';
import env from '../config/env.ts';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// PostgreSQL connection pool oluştur
const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

// Prisma adapter ile pool'u bağla
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

process.on('beforeExit', async () => {
  try {
    await prisma.$disconnect();
    logger.info('Prisma client disconnected');
  } catch (error) {
    logger.error('Error disconnecting Prisma client', error);
  }
});

export default prisma;
