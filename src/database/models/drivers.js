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
<<<<<<< HEAD
=======
      taxis_id: DataTypes.INTEGER,
>>>>>>> chore: database-setup
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
<<<<<<< HEAD
=======

    drivers.hasOne(models.taxis, {
      foreignKey: 'id',
      sourceKey: 'taxis_id',
    });
>>>>>>> chore: database-setup
  };
  return drivers;
};
