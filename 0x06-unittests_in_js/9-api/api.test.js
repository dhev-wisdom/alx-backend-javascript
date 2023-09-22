const request = require('request');

const { expect } = require('chai');

describe('API test', function() {
  it('it should return statusCode of 200 for GET 127.0.0.1:7865/cart/<id:int>', function(done) {
    request('http://localhost:7865/cart/12', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('it should return correct data for GET 127.0.0.1:7865/cart/<id:int>', function(done) {
    request('http://localhost:7865/cart/12', (err, response, body) => {
      expect(body).to.equal(`Payment methods for cart 12`);
      done();
    });
  });
  it('it should return statusCode of 404 for GET 127.0.0.1:7865/cart/<id:str>', function(done) {
      request('http://localhost:7865/cart/hello', (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});