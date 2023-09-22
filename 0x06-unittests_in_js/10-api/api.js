const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 7865;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateIdParam, (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.json(data);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
})

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

function validateIdParam(req, res, next) {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send(`Cannot GET /cart/${id}. id must be a number.\nn`);
  }
  next();
}