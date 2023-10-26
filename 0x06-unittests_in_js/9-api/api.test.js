const expect = require("chai").expect;
const request = require("request");

const URL = "http://localhost:7865";

describe("Index page", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };
  it("test the index page route status code", (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("test the index  route content", (done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("test the index route for content length", (done) => {
    request(options, function (err, res, body) {
      expect(res.headers["content-length"]).to.equal("29");
      done();
    });
  });
});

describe("Cart page with id value", () => {
  it("test route the status code", (done) => {
    request("http://localhost:7865/cart/12", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("test route the status content", (done) => {
    request("http://localhost:7865/cart/12", (err, res, body) => {
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });

  it("test correct status code for incorrect url", function (done) {
    request.get("http://localhost:7865/cart/kim", function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
