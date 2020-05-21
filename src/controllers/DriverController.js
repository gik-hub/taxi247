import Util from '../utils/Utils';
import DriverServices from '../services/DriverServices';

const util = new Util();
const {
  getAllDrivers,
  findDriverById,
  findDriverByStatus,
  findDriverInRange,
} = DriverServices;

class DriverController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {object} returns an object of all the drivers
   */
  static async getDrivers(req, res) {
    const drivers = await getAllDrivers();
    return res.status(200).send({
      status: 200,
      message: drivers.length > 0 ? 'All drivers' : 'No drivers',
      data: drivers,
    });
  }

  /**
   *
   * @param {*} req - reqest from the use, contain param
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of a specific drivers
   */
  static async getADriver(req, res) {
    if (isNaN(req.params.id)) {
      util.setError(400, 'Driver id must be an Integer');
      return util.send(res);
    }
    const getDriver = await findDriverById(req.params.id);
    if (!getDriver) {
      util.setError(404, 'Resource Not Found!');
      return util.send(res);
    }
    util.setSuccess(200, 'Driver found!', getDriver);
    return util.send(res);
  }

  /**
   *
   * @param {*} req - reqest from the use, contain query values
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of available drivers
   */
  static async findDriverByStatus(req, res) {
    const { value } = req.query;
    const statusOptions = ['free', 'offduty', 'busy'];

    if (!statusOptions.includes(value.toLowerCase())) {
      util.setError(400, `Query status against ${statusOptions.toString()}`);
      return util.send(res);
    }

    const drivers = await findDriverByStatus(value);

    util.setSuccess(200, `All ${value} driver(s)`, drivers);
    return util.send(res);
  }

  /**
   *
   * @param {*} req - reqest from the use, contain query values
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of available drivers in range
   */
  static async findDriverInRange(req, res) {
    const { distance, latitude, longtude } = req.query;
    const radius = distance || 3;
    const driversInRange = await findDriverInRange(radius, latitude, longtude);

    const msg =
      driversInRange.length > 0
        ? `Driver(s) within ${distance || 3}KM`
        : `No Driver(s) ${distance || 3}KM from point`;

    util.setSuccess(200, msg, driversInRange);
    return util.send(res);
  }
}

export default DriverController;
