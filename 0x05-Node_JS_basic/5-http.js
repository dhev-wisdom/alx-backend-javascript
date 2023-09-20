const http = require('http');
const countStudents = require('./3-read_file_async');
const database = process.argv[2];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  //const url = new URL(req.url, `http://${req.headers.host}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    res.write('This is the list of our students');
    try {
      const students = await countStudents(database);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message)
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
