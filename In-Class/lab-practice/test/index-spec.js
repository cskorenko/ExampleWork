const chai = require('chai');
const app = require('../index')
const users = require('../user');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const expect = chai.expect;

describe('User Module', () => {
  describe('/', () => {
    it('should have status 200 when successful', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
    it('should return an array of users', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal(users);
        done();
      });
    });
  });
});
