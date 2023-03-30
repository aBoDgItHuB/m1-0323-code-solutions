/* exported getFullNameOfPerson */
function getFullNameOfPerson(person = {
  firstName: '',
  lastName: ''
}) {
  return person.firstName + ' ' + person.lastName;
}
