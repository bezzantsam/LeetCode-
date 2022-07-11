/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let words = s.trim().split(" ")
   return words.length > 0 ? words[words.length-1].length : 0;
};

// string to array
// last index
// back to string
// .length