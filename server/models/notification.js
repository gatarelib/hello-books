// export default (sequelize, DataTypes) => {
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reciever: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sentdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // Associate Notification with User
        Notification.belongsTo(models.User, {
          foreignKey: 'userid',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Notification;
};
