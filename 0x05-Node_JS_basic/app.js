const express = require('express');

const app = express();


const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express World');
});

app.get('/name', (req, res) => {
  res.send('This route is for your name');
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
