import database from '../database/models';

class RiderServices {
  /**
   *
   * @returns {object} returns an array object with all riders or null
   */
  static async findAllRiders() {
    const riders = await database.riders.findAll();
    return riders.map((rider) => rider.dataValues);
  }

  /**
   *
   * @param {*} id - the id of the specific rider
   * @returns {object} returns a rider object or null
   */
  static async findRiderById(id) {
    const rider = await database.riders.findOne({
      where: { id },
    });
    if (!rider) return null;
    return rider.dataValues;
  }
  /**
   *
   * @param {*} id - the id of the specific order
   * @returns {object} returns an object of the order or null
   */
  static async findRiderOrderById(id) {
    const riderOrder = await database.trip_orders.findOne({
      where: { id },
    });
    if (!riderOrder) return null;
    return riderOrder.dataValues;
  }
}

export default RiderServices;
