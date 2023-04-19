/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i] + suffix;
  }

  return words;
}

console.log(addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity'));
