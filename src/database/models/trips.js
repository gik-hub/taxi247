'use strict';
module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define(
    'trips',
    {
      drivers_id: DataTypes.INTEGER,
      trip_orders_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      pickup_point: DataTypes.GEOMETRY,
      end_time: DataTypes.DATE,
      drop_point: DataTypes.GEOMETRY,
    },
    { freezeTableName: true }
  );
  trips.associate = function (models) {
    // associations can be defined here
    trips.belongsTo(models.trip_orders, {
      foreignKey: 'trip_orders_id',
    });

    trips.belongsTo(models.drivers, {
      foreignKey: 'drivers_id',
    });

    trips.hasMany(models.trip_invoices, {
      foreignKey: 'trips_id',
    });

    trips.hasOne(models.trip_orders, {
      foreignKey: 'trip_orders_id',
    });
  };
  return trips;
};
