// colors Array.
const colors = [
  'red',
  'white',
  'blue'
];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

console.log('value of colors: ', colors);

// students Array.
const students = [
  'student_A',
  'student_B',
  'student_C',
  'student_D'
];

const numberOfStudents = students.length;
console.log('value of numberOfStudents: ', numberOfStudents);

const lastStudent = students[students.length - 1];
console.log('value of lastStudent: ', lastStudent);
console.log('value of students: ', students);
