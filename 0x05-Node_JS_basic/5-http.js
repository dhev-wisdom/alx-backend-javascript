const http = require('http');

const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(database);
      res.end(students.join('\n'));
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Error 404');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
