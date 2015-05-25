/* Medium
3. Longest Substring Without Repeating Characters 
Given a string, find the length of the longest substring without repeating characters. 
For example, the longest substring without repeating letters for "abcabcbb" is "abc", 
which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	// 分析 http://www.ituring.com.cn/article/195597
	if(s===''){
		return 0;
	}
	var maxLen=1,
			currentLen=1,
			len=s.length,
			i,
			repeat;
	for(i=1; i<len; i++){
		repeat = s.substr(i-currentLen,currentLen).indexOf(s.substr(i,1));
		if(repeat === -1){
			currentLen++;
		} else {
			currentLen -= repeat;
		}
		if(maxLen<currentLen){
			maxLen = currentLen;
		}
	}
	
	return maxLen;

};