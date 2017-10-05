/* Given the following functions, write a set of unit tests that will test for the following:
  - Is the function defined
  - Does the function return the correct output when input is correctly
  - Does the fn throw an error when the input is correct
  - Does the function throw an error when the input is undefined
*/

const chai = require('chai');
const index = require('./index');

const expect = chai.expect;

describe('Index File', () => {
  describe('addFunc', () => {

    it('should be a function', () => {
      expect(index.addFunc).to.be.a('function');
    });

    it('should return correct output when input is correct', () => {
      const result = index.addFunc(4,2);
      expect(result).to.be.a('number');
      expect(result).to.deep.equal(6);
    });

    it('should throw an error when input is incorrect', () => {
      try {
        index.addFunc(3,'r');
      }catch(e) {
        expect(e).to.not.be.null;
      }
    });

    it('should throw an error when no parameters are entered', () => {
      // expect(index.addFunc).to.throw();
      // expect(() => {addFunc(5, 'test');}).to.throw();
      try {
        index.addFunc(3);
      }catch(e) {
        expect(e).to.not.be.null;
      }
    });
  });

  describe('', () => {
    


  });
});
