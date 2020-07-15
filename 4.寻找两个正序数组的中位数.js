/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mid = Math.ceil((nums1.length+nums2.length)/2);
    let ou = (nums1.length+nums2.length)%2 == 0;
    let nums1_mid = getMidNumber(nums1);
    let nums2_mid = getMidNumber(nums2);
    nums1_mid === false?nums1_mid=nums2_mid:null
    nums2_mid === false?nums2_mid=nums1_mid:null
    let midNumber = (nums1_mid+nums2_mid)/2
    return midNumber

};
//二分查找法 获取数组中位数
var getMidNumber = function (arr){
    if(arr.length == 0){
        return false;
        
    }
   
    let midNumber;
    let midIndex = Math.ceil(arr.length/2) - 1
    let ou = arr.length%2 == 0;
    if(ou){
        midNumber =  (arr[midIndex]+arr[midIndex+1])/2;
    }else{
        midNumber = arr[midIndex];
    }

    return midNumber
}
// @lc code=end

