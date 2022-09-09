/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
 n = s.length
    const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);
    let reversed = s.split("").reverse().join("");
    
    if(s === reversed) {
        return true
    } 
    for(let i = 0; i<n; i++){
        const start = i;
        const end = n-i-1
       const nTransformed = cut(s, start)
       const rTransformed = cut(reversed, end)
       if(nTransformed === rTransformed){
           return true
       }
    }
    
     return false
}