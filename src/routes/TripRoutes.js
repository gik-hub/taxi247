import { Router } from 'express';
import TripController from '../controllers/TripController';
import TripRequestValidator from '../middlewares/TripRequestValidator';

const router = new Router();

const { createTrip, completeTrip } = TripController;
const { validateNewRequest, validateCompleteRequest } = TripRequestValidator;

router.post('/create', validateNewRequest, createTrip);
router.post('/complete', validateCompleteRequest, completeTrip);

export default router;
