const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index.js');

const expect = chai.expect;

chai.use(chaiHttp);

const cars = [
  {
    id: 1,
    name: 'Bob',
    make: 'Ford',
    model: 'Focus',
    features: ['4-door', '160 horsepower', '26/36 mpg'],
  },
  {
    id: 2,
    name: 'Betty',
    make: 'Mazda',
    model: 'CX5',
    features: ['4-door', '187 horsepower', '31 mpg'],
  },
  {
    id: 3,
    name: 'Freddy',
    make: 'Nissan',
    model: 'Coupe',
    features: ['2-door', '332 horsepower', '19/26 mpg'],
  },
  {
    id: 4,
    name: 'Sammy',
    make: 'Chevy',
    model: 'Spark',
    features: ['4-door', '98 horsepower', '38 mpg'],
  },
];

const trucks = [
  {
    id: 1,
    name: 'Manny',
    make: 'Ford',
    model: 'F-150',
    features: ['2-door', '375 horsepower', '15/19 mpg'],
  },
  {
    id: 2,
    name: 'The Rock',
    make: 'GMC',
    model: 'Sierra',
    features: ['4-door', '445 horsepower', '25 mpg'],
  },
  {
    id: 3,
    name: 'Big Mac',
    make: 'Nissan',
    model: 'Frontier',
    features: ['4-door', '152 horsepower', '19/23 mpg'],
  },
  {
    id: 4,
    name: 'Denver',
    make: 'Chevy',
    model: 'Colorado',
    features: ['4-door', '308 horsepower', '30 mpg'],
  },
];

describe('Routes', () => {
  describe('/', () => {
    it('should respond with 200 when successful', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });
    describe('/cars', () => {
    it('should respond with 200 when successful', (done) => {
      chai.request(app)
      .get('/cars')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      done();
      });
    });
    it('should return an array of cars', (done) => {
      chai.request(app)
      .get('/cars')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal(cars);
        done();
      });
    });
  });
  describe('/trucks', () => {
    it('should respond with 200 when successful', (done) => {
      chai.request(app)
      .get('/trucks')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
    it('should return an array of trucks', (done) => {
      chai.request(app)
      .get('/trucks')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal(trucks);
        done();
      });
    });
  });
});
