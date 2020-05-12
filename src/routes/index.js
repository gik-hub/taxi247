import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../../taxi247Swagger.json';
import RiderRoutes from './RiderRoutes';
import DriverRoutes from './DriverRoutes';
import TripRoutes from './TripRoutes';

const router = new Router();

router.use('/riders', RiderRoutes);
router.use('/drivers', DriverRoutes);
router.use('/trips', TripRoutes);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default router;
