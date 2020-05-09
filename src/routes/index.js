import { Router } from 'express';
import ClientRoutes from './ClientRoutes';

const router = new Router();

router.use('/clients', ClientRoutes);

export default router;
