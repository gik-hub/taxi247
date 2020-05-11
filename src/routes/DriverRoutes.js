import { Router } from 'express';
import DriverController from '../controllers/DriverController';

const router = new Router();

const {
  getDrivers,
  getADriver,
  findDriverByStatus,
  findDriverInRange,
} = DriverController;

router.get('/all', getDrivers);
router.get('/status?', findDriverByStatus);
router.get('/range?', findDriverInRange);
router.get('/:id/details', getADriver);

export default router;
