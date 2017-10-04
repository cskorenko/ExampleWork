const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const errMiddleware = require('../err-middleware');

chai.use(sinonChai);

const expect = chai.expect;


describe('Error Middleware', () => {
  const res = {
    code: null,
    status: function(codePassedIn) {
      this.code = codePassedIn;
      return this;
    },
    send: sinon.spy()
  };

  const err = 'This is a test error string';

  afterEach(() => {
    res.send.reset();
  });

  it('should be a function', () => {
    expect(errMiddleware).to.be.a('function');
  });

  it('should have status 401', () => {
    errMiddleware(err, {}, res);
    expect(res.status).to.be.a('function');
    expect(res.code).to.equal(401);
  });

  it('should return proper error message', () => {
    errMiddleware(err, {}, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.calledWith('Unable to log into application: ' + err)).to.be.true;
  });

});
