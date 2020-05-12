import { Router } from 'express';
import RiderRoutes from './RiderRoutes';
import DriverRoutes from './DriverRoutes';
import TripROutes from './TripRoutes';

const router = new Router();

router.use('/riders', RiderRoutes);
router.use('/drivers', DriverRoutes);
router.use('/trips', TripROutes);

export default router;
