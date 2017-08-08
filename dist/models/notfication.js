'use strict';

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
    sent_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        Notification.BelongsTo(models.BorrowHistory, {
          foreignKey: 'user_id'
        });
      }
    }
  });
  return Notification;
};