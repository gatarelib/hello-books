import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import db from '../models';

const { User, Book } = db;

const should = chai.should(); 

chai.use(chaiHttp);

const book = {
  title: 'The Game', 
  isbn: '0-4252-43535', 
  year: 2009,
  author: 'John Smith', 
  description: 'A book about games', 
  count: 20
}

const user = {
  username: 'steve', 
  fullname: 'steve', 
  email: 'steve@outlook.com',
  password: 'steve',
}


const signin = {
  username: 'steve', 
  password: 'steve',
}

describe('API Route Test: ', () => {

  it('[POST: /api/v1/users/signup] should respond with the newly signed-up user data', () => {
    chai
      .request(server)
      .post('/api/v1/users/signup')
      .send(user)
      .end((err, res) => {
        should.not.exist.err(err);
        res.should.have.status(201);
        res.type.should.equal('application/json');
        done()
      });
  }); 


  it('[POST: /api/v1/users/sigin] should respond with the newly auth token', () => {
    chai
      .request(server)
      .post('/api/v1/users/signin')
      .send(signin)
      .end((err, res) => {
        should.not.exist.err(err);
        res.should.have.status(200);
        res.type.should.equal('application/json');
        done()
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
