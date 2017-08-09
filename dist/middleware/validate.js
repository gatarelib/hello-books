'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkBookExists = checkBookExists;
exports.checkUserExists = checkUserExists;
exports.checkUserBorrowedBook = checkUserBorrowedBook;
exports.checkUserReturnedBook = checkUserReturnedBook;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Book = _models2.default.Book,
    User = _models2.default.User,
    BorrowDetail = _models2.default.BorrowDetail;

// Check if book exists

function checkBookExists(req, res, next) {
  Book.findOne({
    where: {
      id: req.params.bookId
    }
  }).then(function (book) {
    if (!book) {
      res.status(404).send("Can't find book!");
    }
    next();
  });
}

// Check if a user borrowed a particular book
function checkUserExists(req, res, next) {
  User.findOne({
    where: {
      id: req.params.userId
    }
  }).then(function (user) {
    if (!user) {
      res.status(404).send('User does not exist!');
    } else next();
  });
}

// Check if a user borrowed a particular book
function checkUserBorrowedBook(req, res, next) {
  BorrowDetail.findOne({
    where: {
      id: req.params.userId
    }
  }).then(function (borrowdetail) {
    if (!borrowdetail && borrowdetail.returndate !== null) {
      res.status(400).send('Book already borrowed!');
    } else next();
  });
}

// Check if a user returned a particular book
function checkUserReturnedBook(req, res, next) {
  BorrowDetail.findOne({
    where: {
      id: req.params.userId
    }
  }).then(function (borrowdetail) {
    if (!borrowdetail && borrowdetail.returndate === null) {
      res.status(400).send('Book already returned!');
    } else next();
  });
}