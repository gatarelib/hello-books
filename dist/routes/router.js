'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

var _book = require('../controllers/book');

var _validate = require('../middleware/validate');

var _authorize = require('../middleware/authorize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Homepage route is also a signup route
router.route('/').get(_user.devTest);

// Handle request for signing up on the platform 
router.route('/api/v1/users/signup').post(_user.createUser);

// Handle request for logging in to the application
router.route('/api/v1/users/signin').post(_validate.checkUserNameExists, _user.loginUser);

// Handle admin request for adding a new book to the database
router.route('/api/v1/books').post(_book.addBook);

// Handle admin request for modifying a book in the db
router.route('/api/v1/books/:bookId').put(_validate.checkBookExists, _book.modifyBook);

// Handle request for getting all books in the database
router.route('/api/v1/books').get(_book.getBooks);

// Handle request for getting a user's borrow history
router.route('/api/v1/users/:userId/books').get(_validate.checkUserExists, _book.getUserBooks);

// Handle request for allowing a user to borrow a book
router.route('/api/v1/users/:userId/books').post(_validate.checkUserExists, _validate.checkUserBorrowedBook, _book.borrowBook);

// Handle request for allowing user to return a book
router.route('/api/v1/users/:userId/books').put(_validate.checkUserExists, _validate.checkUserReturnedBook, _book.returnBook);

// Secret route for admin user login
router.route('/api/v1/users/OX8b79Ie89Fd6sh5ysg1JR93d/signup').post(_user.createAdminUser);

// For test purpose only
router.route('/api/v1/users/notif').post(_book.createNotif);

// For test purpose only 
router.route('/api/v1/users/:userId/notif').get(_book.getUserNotifs);

exports.default = router;