// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
  const objectChar = {};
  let maxKey = 0;
  let maxValue = "";

  for (let char of string) {
    objectChar[char] = objectChar[char] + 1 || 1;
  }
  for (let key in objectChar) {
    if (objectChar[key] > maxKey) {
      maxKey = objectChar[key];
      maxValue = key;
    }
    return maxValue;
  }
}

module.exports = maxChar;
