/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    for (let j=i+1; j<nums.length; j++) {
        if (nums[i]===nums[j]) {
            nums.splice(j,1);
            j--;
        }else {
            i=j
        } 
    }
    return nums.length;
};