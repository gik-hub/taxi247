'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      drivers_id: {
        type: Sequelize.INTEGER,
        references: { model: 'drivers', key: 'id', as: 'drivers_id' },
      },
      taxis_id: {
        type: Sequelize.INTEGER,
        references: { model: 'taxis', key: 'id', as: 'taxis_id' },
      },
      trip_order_id: {
        type: Sequelize.INTEGER,
        references: { model: 'trip_orders', key: 'id', as: 'trip_order_id' },
      },
      start_time: {
        type: Sequelize.DATE,
      },
      end_time: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('trips');
  },
};
