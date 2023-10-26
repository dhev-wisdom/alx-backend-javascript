const calculateNumber = require('./0-calcul');

const assert = require('assert');

describe('calculateNumber', function() {
  it('Should return the sum of two params', function() {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });
  it('Should return the approximate sum of two params', function() {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });
  it('Should return the approximate sum of two params', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
  it('Should return the approximate sum of two params', function() {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
  it('Should return the sum of two params with first number rounded', function() {
    const result = calculateNumber(1.5, 4);
    assert.equal(result, 6);
  });
  it('Should return the sum of two params with second number rounded', function() {
    const result = calculateNumber(1, 4.7);
    assert.equal(result, 6);
  });
});
