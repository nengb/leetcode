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

    let l = 0;
    let r = nums.length-1;
    let mid = Math.floor((l+r)/2);
    //是否偏左
    let inLeft = target > nums[0] ;

    while(l<r){
        if(nums[mid] == target){
            return mid;
        }
        //左边中位数
        let leftMid = Math.floor((l+mid)/2);
        //右边中位数
        let rightMid = Math.floor((mid+r)/2);
        //旋转点中位数附近
        if(nums[leftMid] > nums[rightMid]){
            if(inLeft){
                r = mid;
            }else{
                l = mid;
            }
        //旋转点可能在最左边或者最右边，离中位数较远
        }else if(nums[leftMid] < nums[rightMid]){
            


        }else{
            return -2
        }



        if(nums[mid] > target){
            if(nums[leftMid] < nums[rightMid]){
                l = leftMid ;
                r = mid;
            }else if(nums[leftMid] > nums[rightMid]){
                l = mid ;
                r = rightMid;
            }else{
                return -2
            }

        }else if(nums[mid] < target){
            if(nums[leftMid] < nums[rightMid]){
                l = mid ;
                r = rightMid;
            }else if(nums[leftMid] > nums[rightMid]){
                l = leftMid ;
                r = mid;
            }else{
                return -3
            }
        }else{
            return mid;
        }

        mid = Math.floor((l+r)/2);
    }
    return mid
};
// @lc code=end

