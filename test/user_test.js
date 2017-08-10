import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect(); 

chai.use(chaiHttp);

describe('API Test: ', () => {
  it('Test if true ', () => {
    expect('Hello').to.equal('Hello');
  });
});
