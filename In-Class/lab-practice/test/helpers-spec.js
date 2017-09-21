const chai = require('chai');
const helpers = require('../helpers');

const expect = chai.expect;

describe('Helper function', () => {
  describe('validateUser()', () => {
    it('should return true when a valid user obj is provided', () => {
      const user = {
        username : "cskorenko",
        firstname: "christine",
        lastname: "skorenko",
        password: "heydtsr"
      };

      const result = helpers.validateInput(user);
      expect(result).to.equal(true);
    });

    it('should return false if a user object contains an id', () => {
      const user = {
        id: 83746294040,
      };

      const result = helpers.validateInput(user);
      expect(result).to.equal(false);
    });

    it('should return false if an invalid user is provided', () => {
      const user = {
        username: '',
      };

      const result = helpers.validateInput(user);
      expect(result).to.equal(false);
    });
  });
});
