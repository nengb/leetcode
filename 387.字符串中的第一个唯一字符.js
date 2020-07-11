/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (45.65%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    85.1K
 * Total Submissions: 186.4K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 
 * 
 * 示例：
 * 
 * s = "leetcode"
 * 返回 0
 * 
 * s = "loveleetcode"
 * 返回 2
 * 
 * 
 * 
 * 
 * 提示：你可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let a = {};
    for(let i=0;i<s.length;i++){
        if(!a[s[i]]){
            a[s[i]] = {index:i,count:1}
        }else{
            a[s[i]].index = i;
            a[s[i]].count++;
        }
    }
    let result = -1;
    for(let key in a){
        if(a[key].count === 1){
            result =  a[key].index
            return result
        }
    }
    return result
};
// @lc code=end

