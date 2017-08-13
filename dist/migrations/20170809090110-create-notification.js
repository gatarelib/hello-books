'use strict';

// export default {
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reciever: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sentdate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userid'
        }
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('notifications');
  }
};