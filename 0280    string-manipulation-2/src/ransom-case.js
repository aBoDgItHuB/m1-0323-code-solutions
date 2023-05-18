/* exported ransomCase */
function ransomCase(string) {
  let result = '';

  for (let i = 1; i <= string.length; i++) {
    if (i % 2 === 0) {
      result += string[i - 1].toUpperCase();
    } else {
      result += string[i - 1].toLowerCase();
    }
  }

  return result;
}
