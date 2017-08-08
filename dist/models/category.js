'use strict';

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        Category.belongsTo(models.Book, {
          foreignKey: 'book_id'
        });
      }
    }
  });
  return Category;
};