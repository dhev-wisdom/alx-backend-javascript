const express = require('express');

const app = express();

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateIdParam, (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

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