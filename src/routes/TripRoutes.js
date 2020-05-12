import { Router } from 'express';
import TripController from '../controllers/TripController';
import TripRequestValidator from '../middlewares/RequestValidator';

const router = new Router();

const { createTrip, completeTrip, getActiveTripOrders } = TripController;
const { validateNewRequest, validateCompleteRequest } = TripRequestValidator;

router.post('/create', validateNewRequest, createTrip);
router.post('/complete', validateCompleteRequest, completeTrip);
router.get('/active', getActiveTripOrders);

export default router;
