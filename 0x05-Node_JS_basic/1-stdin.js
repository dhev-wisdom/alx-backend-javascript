const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  read.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
  process.exit(1);
});
