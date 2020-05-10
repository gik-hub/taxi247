'use strict';
module.exports = (sequelize, DataTypes) => {
  const trip_invoices = sequelize.define(
    'trip_invoices',
    {
      trip_id: DataTypes.INTEGER,
      trip_order_id: DataTypes.INTEGER,
      invoice_total: DataTypes.INTEGER,
      payment_total: DataTypes.INTEGER,
      invoice_date: DataTypes.DATE,
      due_date: DataTypes.DATE,
      payment_date: DataTypes.DATE,
    },
    {}
  );
  trip_invoices.associate = function (models) {
    // associations can be defined here
    trip_invoices.hasOne(model.trips, {
      foreignKey: 'id',
      source: 'trip_id',
      constraints: false
    });

    trip_invoices.hasOne(model.trip_orders, {
      foreignKey: 'id',
      source: 'trip_order_id',
    });
  };
  return trip_invoices;
};
