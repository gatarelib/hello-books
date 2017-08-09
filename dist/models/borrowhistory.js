'use strict';

// export default (sequelize, DataTypes) => {
module.exports = function (sequelize, DataTypes) {
  var BorrowHistory = sequelize.define('BorrowHistory', {
    book_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    borrowed_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    collection_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    returned_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        BorrowHistory.belongsTo(models.User, {
          foreignKey: 'user_id'
        });
      }
    }
  });
  return BorrowHistory;
};