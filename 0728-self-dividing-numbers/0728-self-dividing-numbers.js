/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    //create output array
    //loop from left to right
    // check if i meets helper function if it does push to array
    //return output
    
    //check digits function
    /* 1 return true if num < 10
    2 create temp variable
    3 while loop for temp > 0 
     a create a current variable for the temp % 10
     b if current is 0 or not divisible by number 
     i.return false
     divide temp by 10
    
    
    
    */
    let answerArr = []
    for(let i = left; i<= right; i ++){
     if(checkDigits(i)){
         answerArr.push(i)
     }
    }
    return answerArr
};
    
    let checkDigits = function(num){
        if(num < 10){
            return true
        }
        let temp = num
        while(temp > 0){
            let cur = temp % 10;
            if(cur === 0 || num % cur !== 0){
                return false;
            }
            temp = Math.floor(temp/10)
        }
    
        return true;
    }