// export default (sequelize, DataTypes) => {
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // Associate Category with Book
        Category.belongsTo(models.Book, {
          foreignKey: 'bookid',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Category;
};
