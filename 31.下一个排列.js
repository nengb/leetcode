/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length <=1){
        return nums
    }
    let i = nums.length-2;
    while( i>=0 && nums[i+1]<=nums[i]){
        i--;
    }
    if(i>=0){
        let j = nums.length-1;
        while(j>=0 && nums[j] <=nums[i]){
            j--;
        }
        swap(nums,i,j);
    }
    

 

    reverse(nums,i+1);
    return nums

};
function reverse(nums,start){
    let l = start;
    let r = nums.length-1;
    while(l<r){
        swap(nums,l,r);
        l++;
        r--;
    }
}
function swap(nums,i,j){
    let a = nums[i];
    nums[i] = nums[j];
    nums[j] = a;
    return nums;
}
// @lc code=end

