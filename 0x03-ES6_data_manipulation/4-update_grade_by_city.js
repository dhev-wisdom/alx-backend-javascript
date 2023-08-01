export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((student) => (student.location === city)).map((obj) => {
    obj.grade = 'N/A';
    for (let i = 0; i < newGrades.length; i += 1) {
      if (obj.id === newGrades[i].studentId) obj.grade = newGrades[i].grade;
    }
    return obj;
  });
}
