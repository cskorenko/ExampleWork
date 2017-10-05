const chai = require('chai');
// const helpers = require('../helpers');
const userArray = require('../../users/user.js');
const sinon = require('sinon');
const mockery = require('mockery');

const expect = chai.expect;

let helpers;

describe('Helper Utility', () => {

  before(() => {
    mockery.enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false
    });

    let requestStub = sinon.stub().resolves({res: {}, body: {}});

    mockery.registerMock('request-promise', requestStub);

    helpers = require('../helpers');
  });

  after(() => {
    mockery.disable();
  });


  it('should be an object', () => {
    expect(helpers).to.be.an('object');
    expect(helpers).to.have.all.keys([
      'sendRequest',
      'validateUser'
    ]);
  });

  describe('sendRequest', () => {
    it('should be a function', () => {
      expect(helpers.sendRequest).to.be.a('function');
    });

    it('should return a promise', () => {
      const result = helpers.sendRequest('http://localhost:3006/');
      expect(result.then).to.be.a('function');
    });

    it('should return an object with res & body prop', (done) => {
      helpers.sendRequest('http://localhost:3006/')
        .then((response) => {
          expect(response).to.be.an('object');
          expect(response).to.have.all.keys([
            'res',
            'body'
          ]);
          done();
        }).catch((err) => {
          done();
        });
    });

    it('should return a 404 error when calling a nonexsistant url', (done) => {
      helpers.sendRequest('http://localhost:3004/not').then((reject) => {
        expect(reject.statusCode).to.be(404);
        done();
      }).catch((err) => {
        done();
      });
    });
  });

  describe('validateUser', () => {
    it('should be a function', () => {
      expect(helpers.validateUser).to.be.a('function');
    });

    it('should return true when a valid login is entered', () => {
      const userLogin = {
        username: 'cskorenko',
        password: 'hello1234'
      };

      const result = helpers.validateUser(userArray, userLogin)
      expect(result).to.be.true;
    });

    it('should return false when an invalid user is entered', () => {
      const userLogin = {
        username: 'cskorenk',
        password: 'hello1234'
      };

      const result = helpers.validateUser(userArray, userLogin)
      expect(result).to.be.false;
    })
  });
});
