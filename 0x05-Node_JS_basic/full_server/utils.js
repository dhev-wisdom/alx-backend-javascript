const fs = require('fs');

const readDatabase = (path) => (
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error(err.message));
        return;
      }
      const students = {};
      const lines = data.split('\n').filter((line) => line !== '');

      for (let i = 1; i < lines.length; i += 1) {
        const parts = lines[i].split(',');
        const firstName = parts[0];
        const field = parts[parts.length - 1];
        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      }

      resolve(students);
    });
  })
);

module.exports = readDatabase;
