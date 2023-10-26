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

describe("Login route", () => {
  const options = {
    json: true,
    url: "http://localhost:7865/login",
    body: { userName: "abraham" },
  };

  it("test the status code of the for correct route", (done) => {
    request.post(options, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.be.equal(200);
      }
      done();
    });
  });

  it("test the status code of the route for incorrect data sent", (done) => {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        username: "abraham",
      },
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it("test the content return by the route", (done) => {
    request.post(options, (err, res, body) => {
      expect(body).to.be.equal("Welcome abraham");
      done();
    });
  });
});

describe("Available_payments", () => {
  const url = URL + "/available_payments";

  it("test the route status code", (done) => {
    request.get(url, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.be.equal(200);
      }
      done();
    });
  });

  it("test the content of the return json", (done) => {
    request.get(url, (err, res, body) => {
      const payload = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(JSON.parse(body)).to.deep.equal(payload);
      }
      done();
    });
  });
});
