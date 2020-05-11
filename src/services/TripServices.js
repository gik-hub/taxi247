import database from '../database/models';

class TripServices {
  static async createTrip(tripRequest) {
    try {
      const trip = await database.trips.create(tripRequest);
      // update the trip_order_status of the order to pickup - 4
      await database.trip_orders.update(
        { trip_order_status_id: 4 },
        { where: { id: tripRequest.trip_orders_id } }
      );
      // update the availability_status of the driver to busy - 2
      await database.drivers.update(
        { availability_status_id: 2 },
        { where: { id: tripRequest.drivers_id } }
      );
      return trip.dataValues;
    } catch (error) {
      console.log('error', error);
    }
  }
}

export default TripServices;
