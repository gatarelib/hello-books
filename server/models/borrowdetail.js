// export default (sequelize, DataTypes) => {
module.exports = (sequelize, DataTypes) => {
  const BorrowDetail = sequelize.define('BorrowDetail', {
    booktitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    borrowdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    collectiondate: {
      type: DataTypes.DATE,
    },
    returndate: {
      type: DataTypes.DATE,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // Associate BorrowDetail with User
        BorrowDetail.belongsTo(models.User, {
          foreignKey: 'userid',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return BorrowDetail;
};
