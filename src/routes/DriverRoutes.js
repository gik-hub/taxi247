import { Router } from 'express';
import DriverController from '../controllers/DriverController';
import RequestValidator from '../middlewares/RequestValidator';

const router = new Router();
const { validateCloseDriverQuery } = RequestValidator;

const {
  getDrivers,
  getADriver,
  findDriverByStatus,
  findDriverInRange,
} = DriverController;

router.get('/all', getDrivers);
router.get('/status?', findDriverByStatus);
router.get('/range?', validateCloseDriverQuery, findDriverInRange);
router.get('/:id/details', getADriver);

export default router;
