/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            ,
            doubleAll,
            ,

 */

// getNumbersToTen
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);

    currentNumber++;
  }

  return numbers;
}

console.log('Value of getNumbersToTen(): ', getNumbersToTen());

// getEvenNumbersToTwenty
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);

    currentNumber += 2;
  }

  return evenNumbers;
}

console.log('Value of getEvenNumbersToTwenty(): ', getEvenNumbersToTwenty());

// repeatWord
function repeatWord(
  word,
  times
) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated = repeated + word + ' ';

    count++;
  }

  return repeated;
}

console.log('Value of repeatWord(): ', repeatWord('Javascript', 30));

// logEachCharacter
function logEachCharacter(string) {
  let i;

  for (i = 0; i < string.length; i++) {
    console.log(Array.from(string)[i]);
  }
}

logEachCharacter('javascript');

// doubleAll
function doubleAll(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

const numbers = [5, 7, 8, 9];
console.log('Value of numbers: ', numbers);
console.log('Value of doubleAll(numbers): ', doubleAll(numbers));

// getKeys
function getKeys(object) {
  const keys = [];

  for (const i in object) {
    keys.push(i);
  }

  return keys;
}

const object = {
  isbn: '978-1449365035',
  title: 'Speaking JS',
  author: 'Dr. Axel Rauschmayer'
};

console.log('Value of object: ', object);
console.log('Value of getKeys(object): ', getKeys(object));

// getValues
function getValues(object) {
  const values = [];

  for (const i in object) {
    values.push(object[i]);
  }

  return values;
}

console.log('Value of getValues(object): ', getValues(object));
