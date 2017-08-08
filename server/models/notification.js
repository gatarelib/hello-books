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
    sent_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Notification.belongsTo(models.User, {
          foreignKey: 'user_id',
        });
      },
    },
  });
  return Notification;
};
