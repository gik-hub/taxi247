'use strict';
module.exports = (sequelize, DataTypes) => {
  const trip_orders = sequelize.define(
    'trip_orders',
    {
      clients_id: DataTypes.INTEGER,
      pickup_point: DataTypes.GEOMETRY,
      destination_point: DataTypes.GEOMETRY,
      tentative_price: DataTypes.INTEGER,
      trip_order_status_id: DataTypes.INTEGER,
    },
    {}
  );
  trip_orders.associate = function (models) {
    // associations can be defined here
    trip_orders.belongsTo(model.trip_invoices, {
      foreignKey: 'trip_order_id',
    });

    trip_orders.hasOne(model.clients, {
      foreignKey: 'id',
      sourceKey: 'clients_id',
    });

    trip_orders.hasOne(model.trips, {
      foreignKey: 'id',
      sourceKey: 'trips_id',
    });
  };
  return trip_orders;
};
