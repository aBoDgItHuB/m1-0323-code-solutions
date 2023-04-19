/* exported getIndexes */
function getIndexes(array) {
  const getIndexes = [];

  for (let i = 0; i < array.length; i++) {
    getIndexes.push(i);
  }

  return getIndexes;
}

console.log(getIndexes(['meow', 'woof', 'squeak', 'shazoo']));
