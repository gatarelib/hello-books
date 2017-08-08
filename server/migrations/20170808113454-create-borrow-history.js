module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BorrowHistories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    book_title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    borrowed_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    collection_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    returned_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('BorrowHistories'),
};
