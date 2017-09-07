// test for root of puppies or kitties so the array you get back is correct
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index.js');

const expect = chai.expect;

chai.use(chaiHttp);

const puppies = [
  {
    id: 1,
    name: 'Chanel',
    breed: 'maltese',
    likes: ['back rubs', 'treats'],
    dislike: ['baths', 'vet'],
  },
  {
    id: 2,
    name: 'Boo',
    breed: 'maltese',
    likes: ['tummy rubs', 'all dogs'],
    dislike: ['her sister Chanel'],
  },
  {
    id: 3,
    name: 'Coco',
    breed: 'chihuahua',
    likes: ['human food'],
    dislike: ['everything this'],
  },
];


describe('Routes', () => {
  describe('/puppies', () => {
    it('should respond with 200 when successful', (done) => {
      chai.request(app)
        .get('/puppies')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with an array of puppies', (done) => {
      chai.request(app)
        .get('/puppies')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.deep.equal(puppies);
          done();
        });
    });
  });
});
