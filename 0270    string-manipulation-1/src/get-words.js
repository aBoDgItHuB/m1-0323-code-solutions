/* exported getWords */
function getWords(string) {
  const result = [];

  if (string.length === 0) {
    return result;
  } else {
    return string.split(' ');
  }
}
