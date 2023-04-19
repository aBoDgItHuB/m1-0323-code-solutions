/* exported filterOutStrings */
function filterOutStrings(values) {
  const array = [];

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }

  return array;
}

console.log(filterOutStrings([1, 'a', 'b', 2, 3, 'c']));
