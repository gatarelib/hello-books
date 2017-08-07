'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./routes/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000!');
});

app.use('/', _router2.default);