/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 *
 * https://leetcode-cn.com/problems/shuffle-an-array/description/
 *
 * algorithms
 * Medium (52.20%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 42K
 * Testcase Example:  '["Solution","shuffle","reset","shuffle"]\n[[[1,2,3]],[],[],[]]'
 *
 * 打乱一个没有重复元素的数组。
 * 
 * 
 * 
 * 示例:
 * 
 * // 以数字集合 1, 2 和 3 初始化数组。
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * 
 * // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
 * solution.shuffle();
 * 
 * // 重设数组到它的初始状态[1,2,3]。
 * solution.reset();
 * 
 * // 随机返回数组[1,2,3]打乱后的结果。
 * solution.shuffle();
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.oldNums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.oldNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let nums = [...this.oldNums];
    for(let i=0;i<nums.length;i++){
        let index = getRandom(0,nums.length-1);
        let a = nums[index];
        nums[index]=nums[i];
        nums[i] = a ;
    }
    return nums ;
};

//获取范围随机数
function getRandom(min, max) {
    max++;
    var r = Math.random() * (max - min);
    var re = Math.floor(r + min);
    re = Math.max(Math.min(re, max), min);
    return re;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

