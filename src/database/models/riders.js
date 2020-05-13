'use strict';
module.exports = (sequelize, DataTypes) => {
  const riders = sequelize.define(
    'riders',
    {
      email: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      adress: DataTypes.STRING,
      points: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );
  riders.associate = function (models) {
    // associations can be defined here
    riders.hasMany(models.trip_orders, {
      foreignKey: 'riders_id',
    });
  };
  return riders;
};
