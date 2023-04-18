/* exported getStudentNames */
function getStudentNames(students) {
  const array = [];

  for (const i in students) {
    array.push(students[i].name);
  }

  return array;
}

var students = [
  {
    name: 'Shrek'
  },
  {
    name: 'Donkey'
  },
  {
    name: 'Fiona'
  }
];

console.log(getStudentNames(students));
