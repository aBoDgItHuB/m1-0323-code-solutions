/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person = {
  firstName: '',
  LastName: ''
}) {
  return Array.from(person.firstName)[0];
}
