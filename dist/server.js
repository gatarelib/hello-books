'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _router = require('./routes/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app
var app = (0, _express2.default)();

// Port to listen from should be determined by evironment and defaults to 3000
var port = process.env.PORT || 3000;

// Key for authenticating user sessions
process.env.SECRET_KEY = 'OX8b79Ie89Fd6sh5ysg1JR93d8tR5E892j7Yi0';

// Log requests to the console.
app.use((0, _morgan2.default)('dev'));

// Parse incoming requests data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Set router for path 
app.use('/', _router2.default);

// Set Ui folder
app.use(_express2.default.static(_path2.default.join(__dirname, '/template')));

// Open port and listen from it 
app.listen(port, function () {
  console.log('Listening on port 3000!');
});