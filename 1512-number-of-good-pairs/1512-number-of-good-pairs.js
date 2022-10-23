/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
let count = 0;
let hash = {};
for(let i = 0; i < nums.length; i++){
    if(hash[nums[i]] === undefined){
        hash[nums[i]] = 0;
       } else {
           hash[nums[i]] += 1;
           count = count + hash[nums[i]]
       }          
}
return count;
}