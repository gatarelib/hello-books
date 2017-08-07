'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('../controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('').get(_controller2.default);

router.route('/api/v1/user/signup').get(_controller2.default);

router.route('/api/v1/users/signin').get(_controller2.default);

router.route('/api/v1/users/').get(_controller2.default);

router.route('/api/v1/books').get(_controller2.default);

router.route('/api/v1/books/:bookId').get(_controller2.default);

router.route('/api/v1/users/:userId/').get(_controller2.default);

exports.default = router;