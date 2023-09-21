const chai = require('chai');

const expect = chai.expect;

const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('it should call Utils.calculateNumber with correct number of arguments', function() {
    const utils = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utils.calledWith('SUM', 100, 20)).to.be.true;
    utils.restore();
  });
  it('it should log the sum just as Utils would', function() {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120'));
    consoleSpy.restore();
  });
});