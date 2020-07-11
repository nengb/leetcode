/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (35.02%)
 * Likes:    3950
 * Dislikes: 0
 * Total Accepted:    560.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <=1){
        return s.length;
    }
    
    let maxNumber = 0;
    let hashObj = {};
    let leftStep = 0;
    let count = 0;
    for(let i = 0;i<s.length;i++){
        let char = s[i];
        if(hashObj[char] >=0){
            let oldIndex = hashObj[char]
            maxNumber = Math.max(i-leftStep,maxNumber);
            // delete hashObj[char];
            // console.log(`maxNumber ${maxNumber} count ${count} leftStep ${leftStep}`,hashObj)

            hashObj = {};
            leftStep = oldIndex+1;
            count  = 0;
            i=oldIndex;
        }else{
            // console.log(`char${char} i ${i}`,hashObj)
            hashObj[char]  = i;
            count++;
            
        }

    }
    maxNumber = Math.max(count,maxNumber);

    return maxNumber;
};
// @lc code=end

