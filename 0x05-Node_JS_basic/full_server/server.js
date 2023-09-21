const express = require('express');

const controlRouter = require('./routes/index');

const app = express();

const port = 1245;

controlRouter(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
