'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server.js');

var _server2 = _interopRequireDefault(_server);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User,
    Book = _models2.default.Book;


var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

var book = {
  title: 'The Game',
  isbn: '0-4252-43535',
  year: 2009,
  author: 'John Smith',
  description: 'A book about games',
  count: 20
};

var user = {
  username: 'steve',
  fullname: 'steve',
  email: 'steve@outlook.com',
  password: 'steve'
};

var signin = {
  username: 'steve',
  password: 'steve'
};

describe('API Route Test: ', function () {

  it('[POST: /api/v1/users/signup] should respond with the newly signed-up user data', function () {
    _chai2.default.request(_server2.default).post('/api/v1/users/signup').send(user).end(function (err, res) {
      should.not.exist.err(err);
      res.should.have.status(201);
      res.type.should.equal('application/json');
      done();
    });
  });

  it('[POST: /api/v1/users/sigin] should respond with the newly auth token', function () {
    _chai2.default.request(_server2.default).post('/api/v1/users/signin').send(signin).end(function (err, res) {
      should.not.exist.err(err);
      res.should.have.status(200);
      res.type.should.equal('application/json');
      done();
    });
  });

  // it('Test if true ', () => {
  //   chai
  //     .request(server)
  //     .get('/api/v1/books')
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a('array');
  //       done()
  //     });
  // });
});