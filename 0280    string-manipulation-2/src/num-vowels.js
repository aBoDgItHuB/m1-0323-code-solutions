/* exported numVowels */
function numVowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i].toUpperCase() === 'A' ||
      string[i].toUpperCase() === 'E' ||
      string[i].toUpperCase() === 'I' ||
      string[i].toUpperCase() === 'O' ||
      string[i].toUpperCase() === 'U') {
      count += 1;
    }
  }

  return count;
}
