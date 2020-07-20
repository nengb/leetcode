/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length <3){
        return []
    }

    let arr = [];

    nums.sort((a,b)=>{return a-b})
    if(nums[0] == nums[nums.length-1] && nums[0] == 0){
        return [[0,0,0]]
    }
    for(let i=0;i<nums.length-2;i++){
        let l = i+1;
        let r = nums.length-1;
        
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        while(l<r){
            if(l>i+1 && nums[l] == nums[l-1]){
                l++;
                continue;
            }
            if(r<nums.length-1 && nums[r] == nums[r+1]){
                r--;
                continue;
            }
            if( nums[i]+nums[l] > -nums[r]){
                r--;
            }else if(nums[i]+nums[l] == -nums[r]){
                arr.push([nums[i],nums[l],nums[r]])
                l++;
            }else{
                l++;

            }
        }


    }
    
    return arr
};
// @lc code=end

