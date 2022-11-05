/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversedArray = n.toString(2).split("").reverse()
    while(reversedArray.length < 32){reversedArray.push('0')}
    return parseInt(reversedArray.join(""),2)
};