import { Router } from 'express';
import DriverController from '../controllers/DriverController';

const router = new Router();

const { getDrivers, getADriver, getAvailableDrivers } = DriverController;

router.get('/all', getDrivers);
router.get('/search?', getAvailableDrivers);
router.get('/:id/details', getADriver);

export default router;
