'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('../controllers/controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// TEST //
var userController = require('../controllers').user;

router.route('/api/test/user').post(userController.create);
// TEST //


router.route('').get(_controller.homeController);

router.route('/api/v1/user/signup').post(_controller.devController);

router.route('/api/v1/users/signin').post(_controller.devController);

router.route('/api/v1/books').post(_controller.devController);

router.route('/api/v1/books/:bookId').put(_controller.devController);

router.route('/api/v1/books').get(_controller.devController);

// Match query string of pattern /\?returned=(true|false)/
function matchQueryString(req, res, next) {
  return next(req.query.returned ? null : 'false');
}

router.route('/api/v1/users/:userId/books').get(matchQueryString, _controller.queryController);

router.route('/api/v1/users/:userId/books').post(_controller.devController);

router.route('/api/v1/users/:userId/books').put(_controller.devController);

exports.default = router;