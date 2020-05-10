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
<<<<<<< HEAD
      taxis_id: {
        type: Sequelize.INTEGER,
        references: { model: 'taxis', key: 'id', as: 'taxis_id' },
      },
=======
>>>>>>> chore: database-setup
      trip_order_id: {
        type: Sequelize.INTEGER,
        references: { model: 'trip_orders', key: 'id', as: 'trip_order_id' },
      },
      start_time: {
        type: Sequelize.DATE,
      },
<<<<<<< HEAD
      end_time: {
        type: Sequelize.DATE,
      },
=======
      pickup_point: {
        type: Sequelize.GEOGRAPHY,
      },
      end_time: {
        type: Sequelize.DATE,
      },
      drop_point: {
        type: Sequelize.GEOGRAPHY,
      },
>>>>>>> chore: database-setup
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
