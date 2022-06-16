/**
 * @param {string} s
 * @return {boolean}
 */

    
const isValid = (s) => {
  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);

  for (let i = 0 ; i < s.length ; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    } 
  }

  return stack.length === 0;
};
