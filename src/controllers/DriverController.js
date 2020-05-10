import DriverServices from '../services/DriverServices';

const { getAllDrivers } = DriverServices;

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
      message: 'successful',
      data: drivers,
    });
  }
}

export default DriverController;
