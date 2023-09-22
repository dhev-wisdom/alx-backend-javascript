const expect = require('chai').expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('it should return a resolved promise if function param is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});