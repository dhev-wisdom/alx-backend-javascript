const request = require('request');

const { expect } = require('chai');

describe('API test', function() {
  it('it should return statusCode of 200 for GET 127.0.0.1:7865/', function(done) {
    request('http://localhost:7865', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('it should return correct response for GET 127.0.0.1:7865/', function(done) {
      request('http://localhost:7865', (err, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});