/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  

    //upper to lower
    //remove alphanumeric
    //reverse
    let newS = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase().split("").reverse().join()
    
    let oS = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase().split("").join()
    
return newS == oS
    
    
    
    
    
    
//     str = 'A!@#b$%^c&*(';

// const replaced = str.replace(/[^a-z0-9]/gi, '');
// console.log(replaced); // \U0001f449️ Abc

};