'use strict';

// export default (sequelize, DataTypes) => {
module.exports = function (sequelize, DataTypes) {
  var Notification = sequelize.define('Notification', {
    sender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reciever: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sentdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // Associate Notification with User
        Notification.belongsTo(models.User, {
          foreignKey: 'userid',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Notification;
};