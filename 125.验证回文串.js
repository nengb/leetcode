/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (45.78%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    139.7K
 * Total Submissions: 305.2K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a=''
    for(let i=0;i<s.length;i++){
        if(/^[0-9A-Za-z]+/g.test(s[i])){
            a+=s[i].toLowerCase();
        }
    }
    for(let i=0;i<a.length/2;i++){
        if(a[i] != a[a.length-1-i]){
            return false;
        }
    }
    return true;
};
// @lc code=end

