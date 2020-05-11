import { Router } from 'express';
import TripController from '../controllers/TripController';
import TripRequestValidator from '../middlewares/TripRequestValidator';

const router = new Router();

const { createTrip } = TripController;
const { validateNewRequest } = TripRequestValidator;

router.post('/create', validateNewRequest, createTrip);

export default router;
