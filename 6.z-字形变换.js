/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let curRow = 0;
    let goingDown = false;
    let rows = new Array(numRows).fill('');
    for(let i=0;i<s.length;i++){
        rows[curRow] += s[i];
        if(curRow == 0|| curRow == numRows-1) goingDown=!goingDown
        curRow += goingDown?1:-1;
    }
    return rows.join('')

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = convert;
// @after-stub-for-debug-end