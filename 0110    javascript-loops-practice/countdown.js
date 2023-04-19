/* exported countdown */
function countdown(number) {
  const numberArray = [];

  while (number >= 0) {
    numberArray.push(number);
    number = number - 1;
  }

  return numberArray;
}

console.log(countdown(10));
