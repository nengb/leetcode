/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (44.65%)
 * Likes:    496
 * Dislikes: 0
 * Total Accepted:    173.3K
 * Total Submissions: 388.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastIndex = digits.length-1;
    do{
        let lastNum = digits[lastIndex];
       if(lastNum == 9){
           digits[lastIndex] = 0;
           if(lastIndex == 0){
               digits.unshift(1)
               lastIndex = -1;
           }else{
                lastIndex --;
           }
         
       }else{
           digits[lastIndex]++;
          lastIndex = -1;
           console.log(lastIndex)
           
       }
    }while(lastIndex >=0)
    return digits
};
// @lc code=end

