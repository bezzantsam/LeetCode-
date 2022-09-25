/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    for ( let i = 0; i< nums.length; i++){
        ans.push(nums[i])
    }
    for (let j=0; j< nums.length; j++){
        ans.push(nums[j])
    }
    
    return ans
    
};