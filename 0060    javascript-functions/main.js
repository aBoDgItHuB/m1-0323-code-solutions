// convertMinutesToSeconds
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('Value of convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

// greet
function greet(name) {
  const greet = '"Hey, ' + name + '"';
  return greet;
}

const greetResult = greet('Young');
console.log('Value of greetResult: ', greetResult);

// getArea
function getArea(width, height) {
  const area = width * height;
  return area;
}

const getAreaResult = getArea(17, 42);
console.log('Value of getAreaResult: ', getAreaResult);

// getFirstName
function getFirstName(person = {
  firstName: '',
  lastName: ''
}) {
  return person.firstName;
}

const getFirstNameResult = getFirstName(
  {
    firstName: 'Young Jae',
    lastName: 'Kim'
  }
);

console.log('Value of getFirstNameResult: ', getFirstNameResult);

// getLastElement
function getLastElement(array = []) {
  return array[array.length - 1];
}

const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories'
]);

console.log('Value of getLastElementResult: ', getLastElementResult);
