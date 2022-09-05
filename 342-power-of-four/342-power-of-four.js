/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    for (let i = 0; i<=40; i++){
        if(n == 4**i) return true
    }
    return false
};