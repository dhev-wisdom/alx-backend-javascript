const { default: axios } = require('axios');

const { expect } = require('chai');

describe('API test', function() {
  it('it should return statusCode of 200 for GET 127.0.0.1:7865/', async function() {
    const response = await axios.get('http://localhost:7865');
    expect(response.status).to.equal(200);
  });
  it('it should return body of "Welcom..." for GET 127.0.0.1:7865/', async function() {
    const response = await axios.get('http://localhost:7865');
    expect(response.data).to.equal('Welcome to the payment system');
  });
});