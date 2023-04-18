/* exported includesSeven */
function includesSeven(array) {
  let boolean = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      boolean = true;
      break;
    }
  }

  return boolean;
}

console.log(includesSeven([1, 2, 3, 4, 5, 6, 7]));
console.log(includesSeven([1, 2, 3, 4, 5, 6, '7']));
