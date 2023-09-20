const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const studentsCount = {};
    const lines = data.split('\n');
    console.log(`Number of students: ${lines.length - 2}`);

    for (let i = 1; i < lines.length - 1; i += 1) {
      const line = lines[i];
      const parts = line.split(',');
      const field = parts[parts.length - 1];
      if (!studentsCount[field] && field !== 'field' && field !== '') {
        studentsCount[field] = [];
      }
      studentsCount[field].push(parts[0]);
    }

    Object.keys(studentsCount).forEach((key) => {
      const values = studentsCount[key];
      console.log(`Number of students in ${key}: ${values.length}. List: ${values.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
