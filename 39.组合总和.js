/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a,b)=>{return a-b})
    let obj = {}
    candidates.forEach((e,i)=>{
        obj[e]=i;
    })
    
    let len = Math.floor(target/candidates[0])
    let result = []
    let node = {
        val:target,
        next:null
    }

    
};


// @lc code=end

