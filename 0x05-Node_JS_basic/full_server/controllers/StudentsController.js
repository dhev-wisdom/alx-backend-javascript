const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let message;

        students.push('This is the list of our students');
        for (const key of Object.keys(fields)) {
          message = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
          students.push(message);
        }
        response.status(200).send(`${students.join('\n')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(DATABASE)
      .then((fields) => {
        const students = fields[major];
        const firstNames = `List: ${students.join(', ')}`;
        response.status(200).send(firstNames);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
