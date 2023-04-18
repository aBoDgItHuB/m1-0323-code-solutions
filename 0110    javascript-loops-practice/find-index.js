/* exported findIndex */
function findIndex(array, value) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(findIndex([9, 8, 3], 4));
console.log(findIndex([9, 8, 3, 4], 4));
console.log(findIndex([9, 4, 8, 3], 4));
