'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();
var server = require('../server.js');

_chai2.default.use(_chaiHttp2.default);

describe('API Route Test: ', function () {
  it('Test if true ', function () {
    _chai2.default.request(server).get('/api/v1/books').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('array');
      done();
    });
  });
});