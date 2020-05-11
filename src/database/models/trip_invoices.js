'use strict';
module.exports = (sequelize, DataTypes) => {
  const trip_invoices = sequelize.define(
    'trip_invoices',
    {
      trips_id: DataTypes.INTEGER,
      trip_orders_id: DataTypes.INTEGER,
      invoice_total: DataTypes.INTEGER,
      payment_total: DataTypes.INTEGER,
      invoice_date: DataTypes.DATE,
      due_date: DataTypes.DATE,
      payment_date: DataTypes.DATE,
    },
    { freezeTableName: true }
  );
  trip_invoices.associate = function (models) {
    // associations can be defined here
    trip_invoices.belongsTo(models.trips, {
      foreignKey: 'trips_id',
    });

    trip_invoices.belongsTo(models.trip_orders, {
      foreignKey: 'trip_orders_id',
    });
  };
  return trip_invoices;
};
