/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let numSum = 0;
  let corrSum = 0;
  for (let i = 0; i< nums.length+1; i++){
      corrSum += i
      numSum += i < nums.length ? nums[i] : 0;
  }
    return corrSum - numSum
};