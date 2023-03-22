const student = {
  firstName: 'Young Jae',
  lastName: 'KIM',
  age: 40
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Reporting engineer';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 1970
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle.color);
console.log('value of isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Bori',
  type: 'Kitten'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
