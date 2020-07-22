/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0;
    let r = nums.length-1;
    while(l<=r){
        mid = Math.floor((l+r)/2);

        if(target>nums[mid]){
            l = mid+1;
        }else if(target<nums[mid]){
            r = mid-1;
        }else{
            return mid;
        }
    }
    return l;
};
// @lc code=end

