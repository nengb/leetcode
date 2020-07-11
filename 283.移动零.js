/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (61.54%)
 * Likes:    644
 * Dislikes: 0
 * Total Accepted:    171.8K
 * Total Submissions: 279.2K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let fastIndex = 0;
    let slowIndex = 0;
    
    while(fastIndex<nums.length){
        if(nums[fastIndex] != 0){
            if(nums[slowIndex] == 0){
                nums[slowIndex] = nums[fastIndex];
                nums[fastIndex] = 0
            }
            slowIndex ++;
        }

        fastIndex++;
    }
  
    return nums
};
// @lc code=end

