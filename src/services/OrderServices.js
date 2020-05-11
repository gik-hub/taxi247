import { Op } from 'sequelize';
import database from '../database/models';

class OrderServices {
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
