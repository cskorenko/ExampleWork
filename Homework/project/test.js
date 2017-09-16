const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');

const expect = chai.expect;

chai.use(chaiHttp);

const exampleArray = [
  {
    id: 1,
    prop: 'Hello World'
  },
  {
    id: 2,
    prop: "Goodbye World"
  }
]

describe('Routes', () => {
  describe('/', () => {
    it('should respond with 200 when successful', (done) => {
      chai.request(app)
      .get('/')
      .end ((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });
  describe('example', () => {
    describe('GET', () => {
      it('should respond with 200 when successful', (done) => {
        chai.request(app)
        .get('/example')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
      });
      it('should return an array of prop\'s', (done) => {
        chai.request(app)
        .get('/example')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.deep.equal(exampleArray);
          done();
        });
      });
    });
    describe('POST', () => {
      it('should respond with 200 when successful', (done) => {
        chai.request(app)
        .post('/example')
        .send({ id: 3, prop : 'Christine' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
      });
      it('should return the same object being entered', (done) => {
        chai.request(app)
        .post('/example')
        .send({ id : 3, prop : 'enitsirhC' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.json;
          expect(res.body).to.deep.equal('Christine');
          done();
        });
      });
    });
    describe('PUT', () => {
      it('should respond with 200 when successful', (done) => {
        chai.request(app)
        .put('/example/1')
        .send({ prop : 'Ting' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
      });
      it('should return the updated object entered', (done) => {
        chai.request(app)
        .put('/example/1')
        .send({ prop : 'Ting' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.json;
          expect(res.body).to.deep.equal({ id: 1, prop : 'Ting' });
          done();
        });
      });
    });
  });
});
