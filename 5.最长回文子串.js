/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.00%)
 * Likes:    2406
 * Dislikes: 0
 * Total Accepted:    312.9K
 * Total Submissions: 1M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<=1){
        return s;
    }
    if(s.length == 2){
        if(s[0] == s[1]){
            return s
        }else{
            return s[0]
        }
    }   

    let maxStr = s[0]
    for(let i=0;i<s.length-1;i++){
        if(i<=s.length-3 &&  s[i] == s[i+2]){
           let str = centerSpread(s,i,i+2,s[i]+s[i+1]+s[i+2])
            maxStr.length<str.length?maxStr = str:null
        }
        if(s[i]==s[i+1]){
           let str = centerSpread(s,i,i+1,s[i]+s[i+1])
            maxStr.length<str.length?maxStr = str:null
        }
    }

   return maxStr
};
//中心扩展
function centerSpread(s,l,r,char){
    while(l>=0 || r<=s.length-1){
        l--;
        r++;
        if(s[l] && s[l]==s[r] ){
            char = s[l]+char+s[r];
        }else{
            break;
        }
    }

    return char
}

// @lc code=end

