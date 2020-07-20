/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length<4){
        return [];
    }
    nums.sort((a,b)=>{return a-b})

    let numsHash = {}
    let result = []

    for(let i=0; i<nums.length-3; i++){
        for(let k=i+1; k<nums.length-2;k++){
            let l = k+1;
            let r = nums.length-1;
            while(l<r){
                let sum = nums[i]+nums[k]+nums[l]+nums[r];
                if(target > sum){
                    l++;
                }else if(target < sum){
                    r--;
                }else{
                    let arr = [nums[i],nums[k],nums[l],nums[r]]
                    let key = arr+'';
                    if(!numsHash[key]){
                        result.push(arr)
                        numsHash[key]=true
                    }
                    l++;
                }

            }
        }
    }
    return result
};
// @lc code=end

