import { Router } from 'express';
import ClientRoutes from './ClientRoutes';
import DriverRoutes from './DriverRoutes';

const router = new Router();

router.use('/clients', ClientRoutes);
router.use('/drivers', DriverRoutes);

export default router;
