import Utils from '../utils/Utils';
import { distanceBtnInKm } from '../utils/helper';
import RiderServices from '../services/RiderServices';
import DriverServices from '../services/DriverServices';

const util = new Utils();
const {
  findAllRiders,
  findRiderById,
  findCloseDrivers,
  findRiderOrderById,
} = RiderServices;
const { findDriverInRange } = DriverServices;

class RiderController {
  /**
   *
   * @param {*} req - null
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of available riders
   */
  static async getAllRiders(req, res) {
    try {
      const riders = await findAllRiders();
      util.setSuccess(200, 'All Riders', riders);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Internal server error');
      console.log(error.stack);
      return util.send(res);
    }
  }

  /**
   *
   * @param {*} req - reqest from the use, contain id param
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of a specific rider
   */
  static async getSpecificRider(req, res) {
    try {
      const rider = await findRiderById(req.params.id);
      if (!rider) {
        util.setError(404, 'Resource Not found');
        return util.send(res);
      }
      util.setSuccess(200, 'Rider', rider);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Internal server error');
      console.log(error.stack);
      return util.send(res);
    }
  }

  /**
   *
   * @param {*} req - reqest from the use, contain query values
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of specific trip order
   */
  static async getSpecificRiderOrder(req, res) {
    try {
      const ridersOrder = await findRiderOrderById(req.params.id);
      if (!ridersOrder) {
        util.setError(404, 'Resource Not found');
        return util.send(res);
      }
      util.setSuccess(200, "Rider's order", ridersOrder);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Internal server error');
      console.log(error.stack);
      return util.send(res);
    }
  }

  /**
   *
   * @param {*} req - reqest from the use, contain query values
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of close drivers in a radius drivers
   */
  static async getCloseDrivers(req, res) {
    const { distance } = req.query;
    const { refLocation } = req.body;
    // default search radius is 3KMs
    const radius = distance || 3;
    // extract long an dlatitudes from the reference location
    const refLongtudes = refLocation.coordinates[0];
    const refLatitude = refLocation.coordinates[1];
    try {
      const allDriversInRadius = await findDriverInRange(
        radius,
        refLatitude,
        refLongtudes
      );

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
      });
      // sort the drivers by distance
      await allDriversInRadius.sort((driver1, driver2) => {
        if (driver1.distance > driver2.distance) return -1;
        if (driver1.distance < driver2.distance) return 1;
      });

      const bestChoices = allDriversInRadius.reverse().slice(0, 3);

      util.setSuccess(200, 'Closest drivers', bestChoices);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Internal server error');
      console.log(error.stack);
      return util.send(res);
    }
  }
}

export default RiderController;
