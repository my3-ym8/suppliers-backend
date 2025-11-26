// Tüm API route'larını birleştirir ve /api prefix'i ile yapılandırır
import { Router } from 'express';
import authRouter from './modules/auth/auth.router.ts';

const apiRouter = Router();

// Auth routes
apiRouter.use('/auth', authRouter);

// Diğer route'lar buraya eklenecek
// apiRouter.use('/users', usersRouter);
// apiRouter.use('/suppliers', suppliersRouter);
// ...

export default apiRouter;

