import {listOfStudents} from './9-hoisting.js';

console.log(listOfStudents);

const list = listOfStudents.map(s => s.fullStudentDescription);
console.log(list);
