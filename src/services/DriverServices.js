import { Op } from 'sequelize';
import database from '../database/models';

class DriverServices {
  static async getAllDrivers() {
    try {
      const drivers = await database.drivers.findAll();
      return drivers.map((data) => data.dataValues);
    } catch (error) {
      console.log('*********** error **************** \n', error);
      throw 'Server error';
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

  static async findFreeDriverById(id) {
    try {
      const driver = await database.drivers.findOne({
        where: { id },
        include: [
          {
            model: database.availability_status,
            attributes: ['status'],
            where: {
              [Op.and]: [{ status: 'free' }],
            },
          },
        ],
      });
      if (!driver) return null;
      return driver.dataValues;
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

  static async findDriverInRange(dist, lat, lon) {
    try {
      // ST_MakePoint(longitude, latitude);
      const query = `
      SELECT * FROM "drivers"
      WHERE 
        ST_DWithin(drivers.current_location,
            ST_MakePoint(${lon},${lat})::geography,
            ${dist * 1000});
      `;

      const inRange = await database.sequelize.query(query, {
        type: database.sequelize.QueryTypes.SELECT,
      });

      return inRange;
    } catch (error) {
      console.log('*********** error **************** \n', error);
    }
  }
}

export default DriverServices;
