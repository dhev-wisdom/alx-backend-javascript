const expect = require('chai').expect;

const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;
  beforeEach(() => {
    consoleLogSpy = sinon.stub(console, 'log');
  });
  afterEach(() => {
    consoleLogSpy.restore();
  });
  it('it should log the string The total is: 120 once', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });
  it('it should log the string The total is: 20 once', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});