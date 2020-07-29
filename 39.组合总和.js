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
   
    candidates.sort((a,b)=>{return a-b})
    let result = dfs(candidates,target)
    return result
};

function dfs(candidates,target,result=[],numsStr=[0],index=0){

    for(let i=index;i<candidates.length;i++){
        let num = candidates[i];
        if(numsStr[0]+num>target){
            return result
        }

       if(numsStr[0]+num<target){
            numsStr.push(num)
            numsStr[0]+=num
            
            dfs(candidates,target,result,numsStr,i);
            numsStr[0] -= num;
            numsStr.pop()

        }else{
            result.push([...numsStr.slice(1,numsStr.length),num])
            return result
        }
     
    }
    return result
}


// @lc code=end

