// export default {
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BorrowDetails', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    booktitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    borrowdate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    collectiondate: {
      type: Sequelize.DATE,
    },
    returndate: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    userid: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userid',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('BorrowDetails'),
};
