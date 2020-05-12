import Util from '../utils/Utils';
import DriverServices from '../services/DriverServices';
import OrderServices from '../services/OrderServices';
import TripServices from '../services/TripServices';

const { findFreeDriverById } = DriverServices;
const { findOpenOrderById } = OrderServices;
const { getTripById } = TripServices;

const util = new Util();

class RequestValidator {
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
      util.setError(400, 'Invalid parameter type');
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
    const { trips_id } = req.body;
    // ensure the trip to complete exists
    if (isNaN(trips_id)) {
      util.setError(400, 'Invalid parameter type');
      return util.send(res);
    }
    const trip = await getTripById(trips_id);
    if (!trip) {
      util.setError(400, `Trip with id ${trips_id} does not exist`);
      return util.send(res);
    }
    // ensure the trip order exists and is an integer
    next();
  }

  static async validIntParams(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) {
      util.setError(400, 'Invalid parameter type');
      return util.send(res);
    }
    next();
  }

  static async requestExistValidation(req, res, next) {
    const { id } = req.params;
    const { distance } = req.query;
    const checkDist = !distance ? false : true;
    if (checkDist) {
      if (isNaN(distance)) {
        util.setError(400, 'Invalid query type - distance');
        return util.send(res);
      }
    }
    const ridersOrder = await findOpenOrderById(id);
    if (!ridersOrder) {
      util.setError(400, 'Resource Not found!');
      return util.send(res);
    }
    // attach the location to search against
    req.body.refLocation = ridersOrder.pickup_point;
    next();
  }

  static async validateCloseDriverQuery(req, res, next) {
    const { distance, latitude, longtude } = req.query;
    const checkDist = !distance ? false : true;
    if (checkDist) {
      if (isNaN(distance)) {
        util.setError(400, 'Invalid query type - distance');
        return util.send(res);
      }
    }

    if (isNaN(latitude) || isNaN(longtude)) {
      util.setError(400, 'Invalid query type - latitude, longtude');
      return util.send(res);
    }
    next();
  }
}

export default RequestValidator;
