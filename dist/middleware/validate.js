'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkBookExists = checkBookExists;
exports.checkUserExists = checkUserExists;
exports.checkUserNameExists = checkUserNameExists;
exports.checkUserBorrowedBook = checkUserBorrowedBook;
exports.checkBookCount = checkBookCount;
exports.checkUserReturnedBook = checkUserReturnedBook;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Book = _models2.default.Book,
    User = _models2.default.User,
    BorrowDetail = _models2.default.BorrowDetail;

/**
 * Check if book exists
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */

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

/**
 * Check if a user borrowed a particular book
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
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

/**
 * Check if a user borrowed a particular book
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
function checkUserNameExists(req, res, next) {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(function (user) {
    if (!user) {
      res.status(404).send('User does not exist!');
    } else next();
  });
}

/**
 * Check if a user borrowed a particular book
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
function checkUserBorrowedBook(req, res, next) {
  BorrowDetail.findOne({
    where: {
      booktitle: req.body.booktitle,
      userid: req.params.userId
    }
  }).then(function (borrowdetail) {
    if (borrowdetail) {
      res.status(409).send('User already borrowed book!');
    } else next();
  });
}

/**
 * Check if a book count is above 0
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
function checkBookCount(req, res, next) {
  Book.findOne({
    where: {
      title: req.body.booktitle,
      count: {
        $gt: 0
      }
    }
  }).then(function (book) {
    if (!book) {
      res.status(400).send('Out of requested book!');
    } else next();
  });
}

/**
 * Check if a user returned a particular book
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
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