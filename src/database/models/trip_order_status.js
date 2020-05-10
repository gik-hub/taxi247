'use strict';
module.exports = (sequelize, DataTypes) => {
  const trip_order_status = sequelize.define(
    'trip_order_status',
    {
      status: DataTypes.STRING,
    },
    {}
  );
  trip_order_status.associate = function (models) {
    // associations can be defined here
    trip_order_status.belongsTo(models.trip_orders, {
      foreignKey: 'trip_order_status_id',
    });
  };
  return trip_order_status;
};
