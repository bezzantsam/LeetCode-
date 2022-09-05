/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for (let i = 0; i < 100; i++){
        if (2**i == n ) return true
    }
    return false
};