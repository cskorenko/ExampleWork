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

  const err = 'This is a fake error string';

  afterEach(() => {
    res.send.reset();
  });

  it('should be a function', () => {
    expect(errMiddleware).to.be.a('function');
  });

  it('should set the status to 500', () => {
    errMiddleware(err, {}, res)
    expect(res.status).to.be.a('function');
    expect(res.code).to.equal(500);
  });

  it('should call res.send with correct error message', () => {
    errMiddleware(err, {}, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.calledWith('Internal Server Error: This is a fake error string')).to.be.true;
  });

});
