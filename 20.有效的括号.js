/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (41.94%)
 * Likes:    1674
 * Dislikes: 0
 * Total Accepted:    322.1K
 * Total Submissions: 767.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let data1 = {
        '(':')',
        '{':'}',
        '[':']',
    }
    let data2 = {
        ')':'(',
        '}':'{',
        ']':'[',
    }

    let arr = [];
    if(s.length == 1){
        return false
    }
    for(let i=0;i<s.length;i++){
        let char  = s[i];
        if(!data1[char] && !data2[char]){
            return false;
        }
        if(data1[char]){
            arr.push(char);
        }else if(data2[char]){
            let a = arr.pop();
            if(data1[a] !== char){
                return false
            }
        }

    }
    if(arr.length != 0){
        return false;
    }
    return true
};
// @lc code=end

