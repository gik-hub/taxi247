import Utils from '../utils/Utils';
import { distanceBtnInKm } from '../utils/helper';
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
    const refLongtudes = refLocation.coordinates[0];
    const refLatitude = refLocation.coordinates[1];
    const allDriversInRadius = await findDriverInRange(
      radius,
      refLatitude,
      refLongtudes
    );
    const distDiffs = [];

    // append distance between value
    await allDriversInRadius.forEach((driver) => {
      let driverLatitude = driver.current_location.coordinates[1];
      let driverLongtude = driver.current_location.coordinates[0];
      // distanceBtnInKm = (lat1, lon1, lat2, lon2)
      const pointDiff = distanceBtnInKm(
        refLatitude,
        refLongtudes,
        driverLatitude,
        driverLongtude
      );
      driver.distance = pointDiff;
      distDiffs.push(pointDiff);
    });
    // sort the drivers by distance
    await allDriversInRadius.sort((driver1, driver2) => {
      if (driver1.distance > driver2.distance) return -1;
      if (driver1.distance < driver2.distance) return 1;
    });

    const bestChoices = allDriversInRadius.reverse().slice(0, 3);

    util.setSuccess(200, 'Closest drivers', bestChoices);
    return util.send(res);
  }
}

export default RiderController;
