'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define(
    'clients',
    {
      email: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      adress: DataTypes.STRING,
      points: DataTypes.INTEGER,
    },
    { freezeTableName: true  }
  );
  clients.associate = function (models) {
    // associations can be defined here
    clients.hasMany(models.trip_orders, {
      foreignKey: 'clients_id',
    });
  };
  return clients;
};
