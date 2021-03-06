/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (66.70%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    88.9K
 * Total Submissions: 133.3K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i=0 ;i<numRows;i++){
        let a = [];
        for(let k=0;k<=i;k++){
            if(k == 0 || k==i){
                a.push(1);
            }else{
                a.push(result[i-1][k-1]+result[i-1][k]);
            }
            
        }
        result.push(a)
    }
    return result
};
// @lc code=end

