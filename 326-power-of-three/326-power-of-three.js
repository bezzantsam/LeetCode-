/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for (let i = 0; i<= 100; i++){
        if ( n == 3**i) return true
    }
    return false
};