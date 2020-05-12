import { Router } from 'express';
import RiderController from '../controllers/RiderController';
import RequestValidator from '../middlewares/RequestValidator';

const router = new Router();
const { getAllRiders, getSpecificRider, getCloseDrivers } = RiderController;
const { validIntParams, requestExistValidation } = RequestValidator;

router.get('/all', getAllRiders);
router.get('/:id/details', validIntParams, getSpecificRider);
router.get(
  '/orders/:id/closeDrivers?',
  validIntParams,
  requestExistValidation,
  getCloseDrivers
);

export default router;
