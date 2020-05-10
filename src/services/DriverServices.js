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

  static async findDriverById(id) {
    try {
      const searchDriver = await database.drivers.findOne({
        where: { id },
      });
      if (!searchDriver) return null;
      return searchDriver.dataValues;
    } catch (error) {
      console.log('*********** error **************** \n', error);
    }
  }

  static async findDriverByStatus(status) {
    try {
      const result = await database.drivers.findAll({
        include: [
          {
            model: database.availability_status,
            attributes: ['status'],
            where: {
              status,
            },
          },
        ],
      });
      return result.map((res) => res.dataValues);
    } catch (error) {
      console.log('*********** error **************** \n', error);
    }
  }
}

export default DriverServices;
