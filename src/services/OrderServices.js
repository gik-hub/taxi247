import { Op } from 'sequelize';
import database from '../database/models';

class OrderServices {
  /**
   *
   * @param {*} id - the id of the order which we are searching
   * @returns {object} returns an object of the order or null
   */
  static async findOpenOrderById(id) {
    try {
      const order = await database.trip_orders.findOne({
        where: { id },
        include: [
          {
            model: database.trip_order_status,
            attributes: ['status'],
            where: {
              [Op.or]: [{ status: 'accepted' }, { status: 'offered' }],
            },
          },
        ],
      });
      if (!order) return null;
      return order.dataValues;
    } catch (error) {
      console.log('*********** error **************** \n', error);
    }
  }
}

export default OrderServices;
