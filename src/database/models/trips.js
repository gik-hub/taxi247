'use strict';
module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define(
    'trips',
    {
      drivers_id: DataTypes.INTEGER,
      trip_order_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      pickup_point: DataTypes.GEOMETRY,
      end_time: DataTypes.DATE,
      drop_point: DataTypes.GEOMETRY,
    },
    {}
  );
  trips.associate = function (models) {
    // associations can be defined here
    trips.belongsTo(models.trip_invoices, {
      foreignKey: 'trips_id',
    });

    trips.belongsTo(models.trip_orders, {
      foreignKey: 'trips_id',
    });

    trips.hasOne(models.drivers, {
      foreignKey: 'id',
      sourceKey: 'drivers_id',
    });

    trips.hasOne(models.trip_orders, {
      foreignKey: 'id',
      sourceKey: 'trip_order_id',
    });
  };
  return trips;
};
