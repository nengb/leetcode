/*
 * @lc app=leetcode.cn id=1296 lang=javascript
 *
 * [1296] 划分数组为连续数字的集合
 *
 * https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers/description/
 *
 * algorithms
 * Medium (42.32%)
 * Likes:    27
 * Dislikes: 0
 * Total Accepted:    4.3K
 * Total Submissions: 10.2K
 * Testcase Example:  '[1,2,3,3,4,4,5,6]\n4'
 *
 * 给你一个整数数组 nums 和一个正整数 k，请你判断是否可以把这个数组划分成一些由 k 个连续数字组成的集合。
 * 如果可以，请返回 True；否则，返回 False。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,2,3,3,4,4,5,6], k = 4
 * 输出：true
 * 解释：数组可以分成 [1,2,3,4] 和 [3,4,5,6]。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
 * 输出：true
 * 解释：数组可以分成 [1,2,3] , [2,3,4] , [3,4,5] 和 [9,10,11]。
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums = [3,3,2,2,1,1], k = 3
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：nums = [1,2,3,4], k = 3
 * 输出：false
 * 解释：数组不能分成几个大小为 3 的子数组。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^9
 * 1 <= k <= nums.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    let r = /^\+?[1-9][0-9]*$/;
    let len= nums.length
    if(!r.test(nums.length/k)){
        console.log(k)
        console.log(nums.length)
        return false;
    }
    nums.sort((a,b)=>{return a-b});

    let a = [];
    let count =0;
    for(let i=0;i<(len/k);i++){
        a[i]=[];
        for(let m=0;m<nums.length;m++){
            let numArr = a[i]
            if( (numArr.length>0 && nums[m]==numArr[numArr.length-1]+1) || numArr.length==0){
                a[i].push(nums[m])
                nums.splice(m,1);
                m--;
            }
            if(a[i].length==k){
                count+=k;

                break;
            }
        }
    }
    if(count==len){
        return true
    }else{

        return false
    }

};
// @lc code=end

