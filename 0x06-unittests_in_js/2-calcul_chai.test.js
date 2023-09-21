const calculateNumber = require('./1-calcul');

const chai = require('chai');

const expect = chai.expect;

describe('calculateNumber', function() {
  it('Should return the sum of two params', function() {
    const result = calculateNumber('SUM', 1.4, 4.5);
    //assert.equal(result, 6);
    expect(result).to.equal(6);
  });
  it('Should return the value of param_1 minus param_2', function() {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    //assert.equal(result, -4);
    expect(result).to.equal(-4);
  });
  it('Should return the value of param_1 divided by param_2', function() {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    //assert.equal(result, 0.2);
    expect(result).to.equal(0.2);
  });
  it('Should return "Error" if divisor is 0', function() {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    //assert.equal(result, 'Error');
    expect(result).to.equal('Error');
  });
});
