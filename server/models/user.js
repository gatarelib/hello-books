// export default (sequelize, DataTypes) => {
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fullname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    membership: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // Associate User with BorrowDetail
        User.hasMany(models.BorrowDetail, {
          foreignKey: 'userid',
        });
        // Associate User with Notification
        User.hasMany(models.Notification, {
          foreignKey: 'userid',
        });
      },
    },
  });
  return User;
};
