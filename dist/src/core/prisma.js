// Prisma Client instance'ı: Veritabanı bağlantısı ve query işlemleri için merkezi Prisma client
import { PrismaClient } from '../../generated/prisma/client.js';
import { logger } from '../config/logger.ts';
const globalForPrisma = globalThis;
// Prisma 6'da standart PrismaClient kullanılır (adapter yok)
const prisma = new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}
process.on('beforeExit', async () => {
    try {
        await prisma.$disconnect();
        logger.info('Prisma client disconnected');
    }
    catch (error) {
        logger.error('Error disconnecting Prisma client', error);
    }
});
export default prisma;
//# sourceMappingURL=prisma.js.map