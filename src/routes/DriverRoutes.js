import { Router } from 'express';
import DriverController from '../controllers/DriverController';

const router = new Router();

const { getDrivers } = DriverController;

router.get('/', getDrivers);

export default router;
