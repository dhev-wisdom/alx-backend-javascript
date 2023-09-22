const chai = require('chai');

const expect = chai.expect;

const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let calculateNumber;
  let consoleSpy;
  beforeEach(() => {
    calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.stub(console, 'log');
  });
  afterEach(() => {
    calculateNumber.restore();
    consoleSpy.restore();
  });
  it('it should call Utils with correct number of arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('it should log the sum just as Utils would with correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});