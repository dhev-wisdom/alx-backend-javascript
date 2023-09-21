const fs = require('fs');

const countStudents = (path) => (
  new Promise((resolve, reject) => {
    try {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
          return;
        }
        const studentList = [];
        const studentsCount = {};
        const lines = data.split('\n').filter((line) => line !== '');
        studentList.push(`Number of students: ${lines.length - 1}`);

        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i];
          const parts = line.split(',');
          const field = parts[parts.length - 1].trim();
          if (!studentsCount[field] && field !== 'field' && field !== '') {
            studentsCount[field] = [];
          }
          studentsCount[field].push(parts[0].trim());
        }
        
        Object.keys(studentsCount).forEach((key) => {
          const values = studentsCount[key];
          studentList.push(`Number of students in ${key}: ${values.length}. List: ${values.join(', ')}`);
        });
        resolve(studentList);
      });
    } catch (err) {
      reject(new Error('Cannot load the database'));
    }
  })
);

module.exports = countStudents;
