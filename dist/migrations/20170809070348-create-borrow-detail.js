'use strict';

// export default {
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('BorrowDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booktitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      borrowdate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      collectiondate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      returndate: {
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
    return queryInterface.dropTable('BorrowDetails');
  }
};