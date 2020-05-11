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

  static async getTripById(id) {
    try {
      const trip = await database.trips.findOne({
        where: { id },
      });
      if (!trip) return null;
      return trip.dataValues;
    } catch (error) {
      console.log('error', error);
    }
  }

  static async completeTripRequest(id) {
    // add the trip end time and completion point
    // drop_point: -> set to current drivers location / set destination
    const [, { dataValues }] = await database.trips.update(
      {
        end_time: new Date(),
      },
      { where: { id }, returning: true, plain: true }
    );

    const { trip_orders_id, drivers_id } = dataValues;

    // update the status of the trip order to resolved -> 5
    await database.trip_orders.update(
      { trip_order_status_id: 5 },
      { where: { id: trip_orders_id } }
    );

    // update the status of the driver to free -> 1
    await database.drivers.update(
      { availability_status_id: 1 },
      { where: { id: drivers_id } }
    );

    // generate an invoice
    const invoice = await database.trip_invoices.create({
      trip_id: id,
      trip_orders_id,
      invoice_total: 3434,
      payment_total: 0,
      invoice_date: new Date(),
      due_date: new Date(),
    });
    return invoice.dataValues;
  }
}

export default TripServices;
