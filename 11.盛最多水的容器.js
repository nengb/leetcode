/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    let result = 0;
    while(l<r){
        let area = Math.min(height[l],height[r])*(r-l);
        result = Math.max(area,result);
        if(height[l]<=height[r]){
            l++;
        }else{
            r--;
        }

    }

    return result
   
};
// @lc code=end

