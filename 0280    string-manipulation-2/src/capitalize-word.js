/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
  }
}
