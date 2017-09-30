const chai = require('chai');
const users = require('../user');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);
const expect = chai.expect;

describe('Routes', () => {
  const app = require('../index')
  describe('GET /', () => {
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
        expect(res).to.be.json;
        expect(res.body).to.deep.equal(users);
        done();
      });
    });
  });

  describe('POST /', () => {
    it('should have status 200 when successful', (done) => {
      chai.request(app)
      .post('/')
      .send({
        username: 'cskorenko',
        firstname: 'christine',
        lastname: 'skorenko',
        password: 'hshstd6',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });

    it('should return valid user object', (done) => {
      chai.request(app)
      .post('/')
      .send({
        username: 'cskorenko',
        firstname: 'christine',
        lastname: 'skorenko',
        password: 'hshstd6',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.an('object');
        done();
      });
    });

    it('should return a 500 with the appropriate error message if a invlaid user is sent', (done) => {
      chai.request(app)
      .post('/')
      .send({id: 9393939})
      .end((err, res) => {
        expect(err).to.have.status(500);
        expect(res).to.have.status(500);
        expect(res.text).to.equal('Invalid User Submission');
        done();
      });
    });
  });

  describe('/users/:id', () => {
    it('should have status 200 when successful', (done) => {
      chai.request(app)
      .get('/users/c086a982-2a5c-49a8-ab04-36b052e695d9')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });

    it('should return the ids object', () => {
      chai.request(app)
      .get('/users/c086a982-2a5c-49a8-ab04-36b052e695d9')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal(users[0]);
      });
    });
  });
});
