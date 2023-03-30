/* exported getInitialsOfPerson */
function getInitialsOfPerson(person = {
  firstName: '',
  lastName: ''
}) {
  return Array.from(person.firstName)[0] + Array.from(person.lastName)[0];
}
