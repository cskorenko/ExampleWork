const chai = require('chai');
const users = require('../user');

const expect = chai.expect;

describe('User Module', () => {
  it('should be an array', () => {
    expect(users).to.be.an('array');
  });

  it('should have 5 users', () => {
    expect(users.length === 5).to.be.true;
  });
});
