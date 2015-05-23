
/* 1. two sume
Given an array of integers, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution. Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

var twoSum = function(a, n) {
  a.sort(function(a, b) {
    return a - b;
  });
  var dict = a.reduce(function(acc, e, i) {
    acc[e] = i;
    return acc;
  }, {});
  var ret = [];
  a.forEach(function(e, i) {
    var other = n-e;
    if (dict[other]) {
      ret = [i, dict[other]];
    }
  });
  return ret;
}
 
module.exports = twoSum;