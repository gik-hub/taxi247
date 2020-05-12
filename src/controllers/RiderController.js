import Utils from '../utils/Utils';
import RiderServices from '../services/RiderServices';
import DriverServices from '../services/DriverServices';

const util = new Utils();
const { findAllRiders, findRiderById, findCloseDrivers } = RiderServices;
const { findDriverInRange } = DriverServices;

class RiderController {
  static async getAllRiders(req, res) {
    const riders = await findAllRiders();
    util.setSuccess(200, 'All Riders', riders);
    return util.send(res);
  }

  static async getSpecificRider(req, res) {
    const rider = await findRiderById(req.params.id);
    if (!rider) {
      util.setError(404, 'Resource Not found');
      return util.send(res);
    }
    util.setSuccess(200, 'Rider', rider);
    return util.send(res);
  }

  static async getCloseDrivers(req, res) {
    const { refLocation, distance } = req.body;
    // default search radius is 3KMs
    const radius = distance || 3;
    // extract long an dlatitudes from the reference location
    const longtudes = refLocation.coordinates[0];
    const latitude = refLocation.coordinates[1];
    const closeDrivers = await findDriverInRange(radius, latitude, longtudes);
    util.setSuccess(200, 'Closest drivers', closeDrivers);
    return util.send(res);
  }
}

export default RiderController;
