/* exported capitalizeWords */
function capitalizeWords(word) {
  let result = '';
  let isSpace = 0;

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result += word[i].toUpperCase();
    } else if (word[i] === ' ') {
      isSpace = 1;
      result += word[i];
    } else if (isSpace === 1 & word[i] !== ' ') {
      result += word[i].toUpperCase();
      isSpace = 0;
    } else {
      result += word[i].toLowerCase();
    }
  }

  return result;
}
