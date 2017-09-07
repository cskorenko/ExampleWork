const chai = require('chai');
const chaiHttp = require('chai-http'); // let's us try a copy of server
const app = require('./class9-6.js');

const expect = chai.expect;

chai.use(chaiHttp);


describe('Routes', () => {
  describe('/', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('Testing routes is awesome!');
          done();
        });
    });
  });
  describe('/tacos', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(app)
        .get('/tacos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(app)
        .get('/tacos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('Are delicous!');
          done();
        });
    });
  });
});
