'use strict';

var User = require('../models').User;

module.exports = {
  create: function create(req, res) {
    return User.create({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    }).then(function (user) {
      return res.status(201).send(user);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  }
};