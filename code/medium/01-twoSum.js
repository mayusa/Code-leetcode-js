/* Medium
1. two sume
-- Done.
Given an array of integers, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution. Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var hash = {};
  for(var i=0; i<nums.length; i++) {
    hash[nums[i]] = i;
  }

  for(var j=0; j<nums.length; j++) {
    var needValue = target-nums[j];
    if(hash.hasOwnProperty(needValue)) {
      var index1 = j+1;
      var index2 = hash[needValue]+1;
      if(index1!==index2) {
        return [index1, index2];
      }
    }
  }
};

module.exports = twoSum;