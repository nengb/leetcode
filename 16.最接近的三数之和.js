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
    
    //结果
    let result ;
    //三数和与目标数距离
    let sub ;
    nums.sort((a,b)=>{return a-b});
    // console.log(nums)
    for(let i=0;i<nums.length-2;i++){
        let l = i+1;
        let r = nums.length-1;
        while(l<r){
            let sum = nums[l]+nums[r]+nums[i];
            let target_sum = target - sum
            if(!sub || sub > Math.abs(target_sum)){
                sub = Math.abs(target_sum)
                result = sum
            }

            if( target_sum >0){
                l++;
            }else if(target_sum <0){
                r--;
            }else if(target == sum){
                return sum;
            }

            
        }

    }
    return result

};
// @lc code=end

