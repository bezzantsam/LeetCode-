/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
let defAddr = ''
for ( char of address){
    if (char === '.'){
        defAddr += '[.]'
    }else {
        defAddr += char
    }
}
return defAddr
}