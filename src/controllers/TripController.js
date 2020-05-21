import Utils from '../utils/Utils';
import TripServices from '../services/TripServices';
import { sendEmailTo } from '../utils/mail/mailer';
import RiderServices from '../services/RiderServices';

const util = new Utils();
const { createTrip, completeTripRequest, getActiveTrips } = TripServices;
const { findRiderById } = RiderServices;

class TripController {
  /**
   *
   * @param {*} req - reqest from the use, id of the trip order and driver
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of created trip
   */
  static async createTrip(req, res) {
    try {
      const { trip_orders_id, drivers_id, pickup_point } = req.body;
      const tripRequest = {
        trip_orders_id,
        drivers_id,
        pickup_point,
        start_time: new Date(),
      };
      const trip = await createTrip(tripRequest);

      const msg = `Trip request order: ${trip_orders_id} created with Driver no: ${drivers_id}`;

      util.setSuccess(201, msg, trip);
      return util.send(res);
    } catch (error) {
      res
        .status(500)
        .json({ status: res.statusCode, error: 'Oops something went wrong!' });
    }
  }

  /**
   *
   * @param {*} req - reqest from the use, with the id of trip to complete
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of the completed trip and an invoice
   */
  static async completeTrip(req, res) {
    try {
      const { trips_id } = req.body;
      const {
        completedTrip,
        serviceDriver,
        myInvoice,
      } = await completeTripRequest(trips_id);
      const riderId = completedTrip.dataValues.riders_id;
      const rider = await findRiderById(riderId);

      const data = {
        ridersName: rider.first_name,
        ridersEmail: rider.email,
        ridersPhone: rider.phone_no,
        driversEmail: serviceDriver.dataValues.email,
        taxisPlate: serviceDriver.dataValues.taxi_reg_no,
        driversPhone: 'null',
        invoiceNo: `TX247-${myInvoice.id}`,
        invoiceDated: myInvoice.invoice_date
          .toString()
          .split(' ')
          .slice(0, 4)
          .join(' '),
        invoiceDue: myInvoice.due_date
          .toString()
          .split(' ')
          .slice(0, 4)
          .join(' '),
        invoiceTotal: myInvoice.invoice_total,
        pickUpPnt: completedTrip.dataValues.pickup_point_name,
        destination: completedTrip.dataValues.destination_point_name,
      };
      sendEmailTo(data);
      const msg = `Trip no. ${trips_id} completed and invoiced`;
      util.setSuccess(201, msg, myInvoice);
      return util.send(res);
    } catch (error) {
      console.log('error', error);
      res
        .status(500)
        .json({ status: res.statusCode, error: 'Oops something went wrong!' });
    }
  }

  /**
   *
   * @param {*} req - null
   * @param {*} res - response object sent to user
   * @returns {object} returns an object of all active trips
   */
  static async getActiveTripOrders(req, res) {
    try {
      const activeTrips = await getActiveTrips();

      util.setSuccess(200, 'Active trip orders', activeTrips);
      return util.send(res);
    } catch (error) {}
  }
}

export default TripController;
