import { Router } from 'express';
import ClientRoutes from './ClientRoutes';
import DriverRoutes from './DriverRoutes';
import TripROutes from './TripRoutes';

const router = new Router();

router.use('/clients', ClientRoutes);
router.use('/drivers', DriverRoutes);
router.use('/trips', TripROutes);

export default router;
