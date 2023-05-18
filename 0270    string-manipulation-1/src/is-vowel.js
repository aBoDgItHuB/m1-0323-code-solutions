/* exported isVowel */
function isVowel(char) {
  const result = (
    char.toUpperCase() === 'A' ||
    char.toUpperCase() === 'E' ||
    char.toUpperCase() === 'I' ||
    char.toUpperCase() === 'O' ||
    char.toUpperCase() === 'U'
  );

  return result;
}
