import Utils from '../utils/Utils';
import TripServices from '../services/TripServices';

const util = new Utils();
const { createTrip } = TripServices;

class TripController {
  static async createTrip(req, res) {
    try {
      const { trip_orders_id, drivers_id, pickup_point } = req.body;
      const tripRequest = {
        trip_orders_id,
        drivers_id,
        pickup_point,
        start_time: new Date(),
      };
      const trip = await createTrip(tripRequest);

      const msg = `Trip request order: ${trip_orders_id} created with Driver no: ${drivers_id}`;

      util.setSuccess(201, msg, trip);
      return util.send(res);
    } catch (error) {
      res
        .status(500)
        .json({ status: res.statusCode, error: 'Oops something went wrong!' });
    }
  }
}

export default TripController;