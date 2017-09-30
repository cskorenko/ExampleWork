const chai = require('chai');
const errMiddleware = require('../err-middleware');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const expect = chai.expect;

// a way to test err-middleware result sent along express
// unit spying?? sinon

describe('Error Middleware', () => {
  const res = {
    code: null,
    status: function(codePassedIn) {
      this.code = codePassedIn;
      return this;
    },
    send: sinon.spy() // acknowledges that send was called but don't do anything
  };

  const err = 'This is a fake error string';

  //tests will be altering fake response so we need to reset the code
  //afterEach is built into mocha testing framework
  afterEach(() => {
    res.send.reset();
  });

  it('should be a function', () => {
    expect(errMiddleware).to.be.a('function');
  });

  it('should set the status code to 500', () => {
    errMiddleware(err, {}, res); // err, req, res
    expect(res.code).to.equal(500);
  });

  it('should call res.send with correct error message', () => {
    errMiddleware(err, {}, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.calledWith('Internal Server Error: This is a fake error string')).to.be.true;
  });
});
