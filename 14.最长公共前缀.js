/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (38.41%)
 * Likes:    1144
 * Dislikes: 0
 * Total Accepted:    307.2K
 * Total Submissions: 799.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return '';
    }
    //获取第一个字符
    let headStr = strs[0];
    let result = '';
    for(let i=0;i<headStr.length;i++){
        for(let j=0;j<strs.length;j++){
            if(headStr[i] !== strs[j][i]){
                return headStr.substring(0,i);
            }
        }
        result += headStr[i];
    }
    
    return result;
};
// @lc code=end

