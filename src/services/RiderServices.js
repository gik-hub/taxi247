import database from '../database/models';

class RiderServices {
  static async findAllRiders() {
    const riders = await database.riders.findAll();
    return riders.map((rider) => rider.dataValues);
  }

  static async findRiderById(id) {
    const rider = await database.riders.findOne({
      where: { id },
    });
    if (!rider) return null;
    return rider.dataValues;
  }

  static async findRiderOrderById(id) {
    const riderOrder = await database.trip_orders.findOne({
      where: { id },
    });
    if (!riderOrder) return null;
    return riderOrder.dataValues;
  }
}

export default RiderServices;
