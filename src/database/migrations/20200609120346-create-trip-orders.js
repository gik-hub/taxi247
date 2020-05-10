'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trip_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clients_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clients', key: 'id', as: 'clients_id' },
      },
      pickup_point: {
        type: Sequelize.GEOGRAPHY,
      },
      destination_point: {
        type: Sequelize.GEOGRAPHY,
      },
      tentative_price: {
        type: Sequelize.INTEGER,
      },
      trip_order_status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trip_order_status',
          key: 'id',
          as: 'trip_order_status_id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trip_orders');
  },
};
