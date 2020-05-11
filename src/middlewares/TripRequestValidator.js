import Util from '../utils/Utils';
import DriverServices from '../services/DriverServices';
import OrderServices from '../services/OrderServices';

const { findFreeDriverById } = DriverServices;
const { findOpenOrderById } = OrderServices;
const util = new Util();

class TripRequestValidator {
  /**
   *
   * @param {*} req - reqest object from the user
   * @param {*} res - response object sent to user
   * @param {*} next - function to call the next middleware
   * @returns {object} returns an error object or pass to the next middle ware
   */
  static async validateNewRequest(req, res, next) {
    const { trip_orders_id, drivers_id, pickup_point } = req.body;
    // ensure trip_orders_id, drivers_id integers are valid
    if (isNaN(drivers_id) || isNaN(trip_orders_id)) {
      util.setError(
        400,
        'Ensure the trip_orders_id and drivers_id are integers'
      );
      return util.send(res);
    }
    // ensure the drivers_id exists and is an integer
    const driver = await findFreeDriverById(drivers_id);
    if (!driver) {
      util.setError(
        400,
        `Driver with id ${drivers_id} is unavailable or does not exist`
      );
      return util.send(res);
    }
    // ensure the trip order exists and is an integer
    const order = await findOpenOrderById(trip_orders_id);
    if (!order) {
      util.setError(
        400,
        `Order with id ${trip_orders_id} is resolved or does not exist`
      );
      return util.send(res);
    }
    req.body.pickup_point = req.body.pickup_point || driver.current_location;
    next();
  }

  static async validateCompleteRequest(req, res, next) {
    // ensure the drivers_id exists and is an integer
    // ensure the trip order exists and is an integer
    next();
  }
}

export default TripRequestValidator;
