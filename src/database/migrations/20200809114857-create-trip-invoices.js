'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trip_invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trip_id: {
        type: Sequelize.INTEGER,
        references: { model: 'trips', key: 'id', as: 'trip_id' },
      },
      trip_orders_id: {
        type: Sequelize.INTEGER,
        references: { model: 'trip_orders', key: 'id', as: 'trip_orders_id' },
      },
      invoice_total: {
        type: Sequelize.INTEGER,
      },
      payment_total: {
        type: Sequelize.INTEGER,
      },
      invoice_date: {
        type: Sequelize.DATE,
      },
      due_date: {
        type: Sequelize.DATE,
      },
      payment_date: {
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
    return queryInterface.dropTable('trip_invoices');
  },
};
