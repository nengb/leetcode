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
    let n = nums1.length;
    let m = nums2.length;
    let left = Math.floor((n + m + 1) / 2);
    let right = Math.floor((n + m + 2) / 2);
    //将偶数和奇数的情况合并，如果是奇数，会求两次同样的 k 。
    return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) + getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) * 0.5;


};
//二分查找法 获取数组中位数
var getKth = function (nums1,start1,end1,nums2,start2,end2,k){
    let len1 = end1-start1 +1;
    let len2 = end2-start2 +1;
    if(len1 >len2){
        return getKth(nums2, start2, end2, nums1, start1, end1, k);
    }

    if(len1 == 0 ){
        return nums2[start2+k-1];
    }

    if(k == 1){
        return Math.min(nums1[start1],nums2[start2])
    }

    let i = start1 + Math.min(len1,Math.floor(k/2))-1;
    let j = start2 + Math.min(len2,Math.floor(k/2))-1;
    if(nums1[i] > nums2[j]){
        return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    }else{
        return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    }

}
// @lc code=end

