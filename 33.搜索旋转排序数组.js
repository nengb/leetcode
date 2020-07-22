/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if(target == nums[0]){
        return 0;
    }
    if(target == nums[nums.length-1]){
        return nums.length-1
    }

    let l = 0;
    let r = nums.length-1;
    let mid = Math.floor((l+r)/2);

    while(l<=r){
        if(nums[mid] == target){
            return mid;
        }
        //左边中位数
        let leftMid = Math.floor((l+mid)/2);
        //右边中位数
        let rightMid = Math.floor((mid+r)/2);
        if(nums[leftMid] == target) return leftMid;
        if(nums[rightMid] == target) return rightMid;
        
        if(nums[leftMid] == nums[rightMid]) return -1;
        if( (target > nums[0] && nums[mid]>nums[0] && target>nums[mid] ) ||
            (target <= nums[0] && (nums[mid]>nums[0] || target>nums[mid]) )
        ){
            l = mid;
        }else{
            r = mid;
        }

        mid = Math.floor((l+r)/2);
    }
    return -1
};
// @lc code=end

