/*
 * @lc app=leetcode.cn id=22 lang=javascript
 * 
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n==1){
        return ['()']
    }
   let {s,result } = dfs([],'(',1,n-1,n-1);
    return result
};
/* 
 *  递归回溯算法
 * result array 存符合条件的结果
 * s      string     递归传递中间字符串
 * j      number     把'('看做1，')'看做-1,那么j小于0的时候不符合条件
 * num1   number   '('剩余数量
 * num2   number   ')'剩余数量
*/
function dfs(result,s,j,num1,num2){
    if(num1 >= 1){
        let str = dfs(result,s+'(',j+1,num1-1,num2)
        if(num1==1 && num2==0){
            result.push(str.s+')')
        }
    }
    if(num2 >=1){
        if(j-1>=0){
            let str = dfs(result,s+')',j-1,num1,num2-1)
            if(num1==0 && num2==1){
                result.push(str.s+')')
            }
        }else{
            return { s, result }
        }
    }
    return { s, result }
}
// @lc code=end

