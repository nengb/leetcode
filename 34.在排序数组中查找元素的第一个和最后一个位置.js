/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l1 = 0;
    let r1 = nums.length - 1;
    let l2;
    let r2 = nums.length - 1;
    let mid1;
    let mid2;


    if (nums[0] != target) {
        while (l1 <= r1) {
            mid1 = Math.floor((l1 + r1) / 2);
            if (target > nums[mid1]) {
                l1 = l1 != mid1 ? mid1 : mid1 + 1;
            } else {
                if (target == nums[mid1] && (!l2 || l2 < mid1)) {
                    l2 = mid1;
                }
                r1 = r1 != mid1 ? mid1 : mid1 - 1;
            }

            if (nums[l1 + 1] == target && nums[l1] < target) {
                l1 = l1 + 1;
                r1 = l1 + 1;
            }
        }
    } else if (nums[0] == target) {

        l2 = 0;
        if (nums[nums.length - 1] == target) {
            return [0, nums.length - 1]
        }
    } else {
        return [-1, -1]
    }

    if (nums[nums.length - 1] >= target) {
        while (l2 <= r2) {
            if (nums[l2] == target && ((nums[l2 + 1] > target) || !(nums[l2 + 1] >= 0))) {
                l2 = l2;
                return [l1, l2]
            }
            mid2 = Math.floor((l2 + r2) / 2);
            if (target < nums[mid2]) {
                r2 = r2 != mid2 ? mid2 : mid2 - 1;

            } else {
                l2 = l2 != mid2 ? mid2 : mid2 + 1;
            }



        }
    }


    return [-1, -1]


};
// @lc code=end

