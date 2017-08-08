module.exports = (sequelize, DataTypes) => {
  const BorrowHistory = sequelize.define('BorrowHistory', {
    book_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    borrowed_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    collection_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returned_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        BorrowHistory.belongsTo(models.User, {
          foreignKey: 'user_id',
        });
      },
    },
  });
  return BorrowHistory;
};
