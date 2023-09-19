const readline = require('readline')

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

read.question("Welcome to Holberton School, what is your name?\n", (name) => {
  console.log(`Your name is: ${name}`);
});

process.on('exit', function(arg) {
  console.log('This important software is closing')
})
