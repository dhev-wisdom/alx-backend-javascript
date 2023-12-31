const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(process.argv[2]);
    res.write(msg);
    res.write(students.join('\n'));
    res.end();
  } catch (err) {
    res.send(`${msg}${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

module.exports = app;
