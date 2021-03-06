'use strict';
module.exports = (sequelize, DataTypes) => {
  const availability_status = sequelize.define(
    'availability_status',
    {
      status: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  availability_status.associate = function (models) {
    // associations can be defined here
    availability_status.hasMany(models.drivers, {
      foreignKey: 'availability_status_id',
    });
  };
  return availability_status;
};
