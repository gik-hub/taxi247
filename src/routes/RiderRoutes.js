import { Router } from 'express';
import RiderController from '../controllers/RiderController';
import RequestValidator from '../middlewares/RequestValidator';

const router = new Router();
const {
  getAllRiders,
  getSpecificRider,
  getCloseDrivers,
  getSpecificRiderOrder,
} = RiderController;
const { validIntParams, requestExistValidation } = RequestValidator;

router.get('/all', getAllRiders);
router.get('/:id/details', validIntParams, getSpecificRider);
router.get('/orders/:id/details', validIntParams, getSpecificRiderOrder);
router.get(
  '/orders/:id/closeDrivers?',
  validIntParams,
  requestExistValidation,
  getCloseDrivers
);

export default router;
