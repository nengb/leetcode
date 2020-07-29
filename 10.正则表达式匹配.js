/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * 
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let b = {'.':true,'*':true}
    let l = 0;
    let m = 0;
 
    return true;
};

function dfs(s,p,s_index=0,p_index=0){
    let result = false;
    while(s_index <s.length || p_index <p.length){
        if(p[p_index] == '*'){
           result = dfs(s.slice(1,s.length),s_index,p_index)
        }else if(p[p_index] == '.'){
            return true;
        }else{
            if(p[p_index] != s[s_index]){
                return false;
            }else{
                return true;
            }
        }
        s_index ++;
        p_index ++;
    }
    return result
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isMatch;
// @after-stub-for-debug-end