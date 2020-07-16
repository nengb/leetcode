/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let leftArr = [];
    let rightArr = [];
    nums.forEach(e=>{
        if(e>=target){
            if(e<rightArr[0]){
                rightArr.push(e)
            }
        }
        if(e<target)
    })
};
// @lc code=end

