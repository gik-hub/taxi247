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
      taxi_reg_no: DataTypes.STRING,
      current_location: DataTypes.GEOMETRY,
      current_location_name: DataTypes.STRING,
      availability_status_id: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );
  drivers.associate = function (models) {
    // associations can be defined here
    drivers.belongsTo(models.availability_status, {
      foreignKey: 'availability_status_id',
    });
  };
  return drivers;
};
