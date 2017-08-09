'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfAdmin = checkIfAdmin;
exports.checkIfLoggedIn = checkIfLoggedIn;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User,
    Book = _models2.default.Book,
    BorrowDetail = _models2.default.BorrowDetail,
    Notification = _models2.default.Notification,
    Sequelize = _models2.default.Sequelize;

// Check if admin status of current user

function checkIfAdmin(res, req, next) {}

// Check if current user is logged in
function checkIfLoggedIn(res, req, next) {}