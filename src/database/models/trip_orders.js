'use strict';
module.exports = (sequelize, DataTypes) => {
  const trip_orders = sequelize.define(
    'trip_orders',
    {
      riders_id: DataTypes.INTEGER,
      pickup_point: DataTypes.GEOMETRY,
      pickup_point_name: DataTypes.STRING,
      destination_point: DataTypes.GEOMETRY,
      destination_point_name: DataTypes.STRING,
      tentative_price: DataTypes.INTEGER,
      trip_order_status_id: DataTypes.INTEGER,
      trip_orders_id: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );
  trip_orders.associate = function (models) {
    // associations can be defined here
    trip_orders.belongsTo(models.riders, {
      foreignKey: 'riders_id',
    });

    trip_orders.belongsTo(models.trip_order_status, {
      foreignKey: 'trip_order_status_id',
    });

    trip_orders.hasOne(models.trip_invoices, {
      foreignKey: 'trip_orders_id',
    });

    trip_orders.hasOne(models.trips, {
      foreignKey: 'trip_orders_id',
    });
  };
  return trip_orders;
};
