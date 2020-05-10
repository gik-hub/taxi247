'use strict';
module.exports = (sequelize, DataTypes) => {
  const taxis = sequelize.define(
    'taxis',
    {
      licence_plate: DataTypes.STRING,
      model_description: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {}
  );
  taxis.associate = function (models) {
    // associations can be defined here
    taxis.belongsTo(models.trips, {
      foreignKey: 'taxis_id',
    });
<<<<<<< HEAD
=======

    taxis.belongsTo(models.drivers, {
      foreignKey: 'taxis_id',
    });
>>>>>>> chore: database-setup
  };
  return taxis;
};
