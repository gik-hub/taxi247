import database from '../database/models';

class RiderServices {
  static async findAllRiders() {
    const riders = await database.clients.findAll();
    return riders.map((rider) => rider.dataValues);
  }

  static async findRiderById(id) {
    const rider = await database.clients.findOne({
      where: { id },
    });
    if (!rider) return null;
    return rider.dataValues;
  }

  static async findCloseDrivers(refPoint, radius) {
      // get the current location to find against
    //   const riderLocation = database.trip_orders.find
      // use the drivers model to find the distances

  }
}

export default RiderServices;
