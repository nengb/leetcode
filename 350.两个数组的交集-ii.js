/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (49.07%)
 * Likes:    299
 * Dislikes: 0
 * Total Accepted:    95.9K
 * Total Submissions: 195.5K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 * 
 * 说明：
 * 
 * 
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 * 进阶:
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let numObj = {}
    let result =[]
    nums1.forEach(e=>{
        if(!numObj[e]){
            numObj[e] = {}
        }
        numObj[e].num1>0?numObj[e].num1++:numObj[e].num1 = 1;
    })
    nums2.forEach(e=>{
        if(numObj[e] && numObj[e].num1>0){
              numObj[e].num2>0 ?numObj[e].num2++:numObj[e].num2 = 1;
        }
    })

    
    for(let key in numObj){
        if(numObj[key] && numObj[key].num1 >0 && numObj[key].num2>0 ){
            let num = Math.min(numObj[key].num1 ,numObj[key].num2);
         
            for(let i = 0;i<num;i++){
                result.push(key)
            }
            
        }
    }
    return result
};
// @lc code=end

