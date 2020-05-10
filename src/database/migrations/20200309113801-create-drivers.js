'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      driving_licence: {
        type: Sequelize.STRING,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
<<<<<<< HEAD
=======
      taxis_id: {
        type: Sequelize.INTEGER,
        references: { model: 'taxis', key: 'id', as: 'taxis_id' },
      },
>>>>>>> chore: database-setup
      current_location: {
        type: Sequelize.GEOGRAPHY,
      },
      availability_status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'availability_status',
          key: 'id',
          as: 'availability_status_id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('drivers');
  },
};
