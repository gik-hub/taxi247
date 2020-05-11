'use strict';
module.exports = (sequelize, DataTypes) => {
  const trip_order_status = sequelize.define(
    'trip_order_status',
    {
      status: DataTypes.STRING,
    },
    { freezeTableName: true  }
  );
  trip_order_status.associate = function (models) {
    // associations can be defined here
    trip_order_status.hasMany(models.trip_orders, {
      foreignKey: 'trip_order_status_id',
    });
  };
  return trip_order_status;
};
