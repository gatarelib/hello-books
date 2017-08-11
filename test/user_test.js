import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should(); 
const server = require('../server.js');

chai.use(chaiHttp);

describe('API Route Test: ', () => {
  it('Test if true ', () => {
    chai
      .request(server)
      .get('/api/v1/books')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done()
      });
  });
});
