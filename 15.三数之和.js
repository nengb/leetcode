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
    let l = 0;
    let r = nums.length-1;
    let arr = [];
    let arrObj = {}
    //??
    let 
    nums = nums.sort((a,b,i)=>{
        return  a-b
    })
    while(l<r-1){
        let lrCount = nums[l]+nums[r]
        for(let i=l+1;i<r;i++){
            let count = lrCount+nums[i];
            if(count == 0){
                console.log(`test l ${l} r ${r} i ${i}`)
                let sortArr = [nums[l],nums[i],nums[r]].sort((a,b)=>{return a-b})
                console.log(sortArr)

                let key = ''+sortArr[0]+sortArr[1]
                if(!arrObj[key]){
                    arr.push(sortArr)
                    arrObj[key] = true;
                }
            }
        }
        r--;
    }
    return arr
};
// @lc code=end

