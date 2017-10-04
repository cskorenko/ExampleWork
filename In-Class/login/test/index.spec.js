const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../index');

const expect = chai.expect;

chai.use(chaiHTTP);

describe('ROUTES', () => {
  describe('GET', () => {
    it('should have status 200 when successful', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });

    it('should return correct successful message', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.deep.equal('Welcome to my login app');
        done();
      });
    });
  });

  describe('POST', () => {
    before(() => {
      trackingServer = require('../../tracking/index');
      userServer = require('../../users/index');
    });

    const user = {
      username: 'cskorenko',
      password: 'hello1234'
    };

    it('should have status 200 & user login is successful', (done) => {
      chai.request(app)
      .post('/')
      .send({
        username: 'cskorenko',
        password: 'hello1234'
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.deep.equal(user);
        done();
      });
    });

    // it('should return user object when successful', (done) => {
    //   chai.request(app)
    //   .post('/')
    //   .send({
    //     username: 'cskorenko',
    //     password: 'hello1234'
    //   })
    //   .end((err, res) => {
    //     expect(err).to.be.null;
    //     expect(res).to.be.an('object');
    //     done();
    //   });
    // });

    it('should have 401 status & error when invalid user is entered', (done) => {
      chai.request(app)
      .post('/')
      .send({
        username: 'cskorenk',
        password: 'hello124'
      })
      .end((err, res) => {
        expect(err).to.not.be.null;
        expect(res).to.have.status(401);
        expect(res.text).to.equal('Unable to log into application: Error: Invalid User Credentials')
        done();
      });
    });

    it('should have 401 status & error when login attempts are exceeded', () => {
      const server = chai.request(app)
      .post('/')
      .send({
        username: 'cskorenko',
        password: 'hello1234'
      })
      .then(() => {
        return server.post('/').send({username: 'cskorenko', password: 'hello1234'});
      })
      .then(() => {
        return server.post('/').send({username: 'cskorenko', password: 'hello1234'});
      })
      .then(() => {
        return server.post('/').send({username: 'cskorenko', password: 'hello1234'});
      })
      .then(() => {
        return server.post('/').send({username: 'cskorenko', password: 'hello1234'});
      })
      .then(() => {
        return server.post('/').send({username: 'cskorenko', password: 'hello1234'});
      })
      .catch((err) => {
        expect(err).to.not.be.null;
        expect(err).to.have.status(401);
        done();
      });
    });
  });
});
