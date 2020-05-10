'use strict';
module.exports = (sequelize, DataTypes) => {
  const drivers = sequelize.define(
    'drivers',
    {
      email: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      driving_licence: DataTypes.STRING,
      expiry_date: DataTypes.DATE,
      taxis_id: DataTypes.INTEGER,
      current_location: DataTypes.GEOMETRY,
      availability_status_id: DataTypes.INTEGER,
    },
    {}
  );
  drivers.associate = function (models) {
    // associations can be defined here
    drivers.belongsTo(models.trips, {
      foreignKey: 'drivers_id',
    });

    drivers.hasOne(models.taxis, {
      foreignKey: 'id',
      sourceKey: 'taxis_id',
    });
  };
  return drivers;
};
