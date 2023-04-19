/* exported sumAll */
function sumAll(number) {
  let sumAll = 0;

  for (let i = 0; i < number.length; i++) {
    sumAll = sumAll + number[i];
  }

  return sumAll;
}

console.log(sumAll([1200, 1, 0]));
