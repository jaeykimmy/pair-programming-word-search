const transpose = require("./matrix_transposition");

const wordSearch = (letters, word) => {
  //transpose function to find words vertically
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const transposeLetters = transpose(letters);
  const horizontalJoinAfterMatrix = transposeLetters.map(ls => ls.join(''));
  for (let x of horizontalJoinAfterMatrix) {
    if (x.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch;