'use strict';

// export default {
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
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
          model: 'Books',
          key: 'id',
          as: 'bookid'
        }
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('Categories');
  }
};