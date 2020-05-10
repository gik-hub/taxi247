import Sequelize, { Op } from 'sequelize';
import database from '../database/models';

class DriverServices {
  static async getAllDrivers() {
    try {
      const drivers = await database.drivers.findAll({
        // include: [
        //   {
        //     model: database.availability_status,
        //     required: false,
        //   },
        // ],
      });
      return drivers.map((data) => data.dataValues);
    } catch (error) {
      console.log('*********** error **************** \n', error);
    }
  }
}

export default DriverServices;
