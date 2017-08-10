'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect();

_chai2.default.use(_chaiHttp2.default);

describe('API Test: ', function () {
  it('Test if true ', function () {
    expect('Hello').to.equal('Hello');
  });
});