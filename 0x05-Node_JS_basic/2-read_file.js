const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    console.log(`Number of students: ${lines.length - 1}`);
    const fields = [];
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      const parts = line.split(',');
      const field = parts[parts.length - 1];
      if (!fields.includes(field) && field !== 'field' && field !== '') {
        fields.push(field);
      }
    }

    for (let i = 0; i < fields.length; i += 1) {
      const x = fields[i];
      const y = [];
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i];
        const parts = line.split(',');
        const field = parts[parts.length - 1];
        if (field === x) {
          const firstName = parts[0];
          y.push(firstName);
        }
      }
      console.log(`Number of students in ${x}: ${y.length}. List: ${y.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
