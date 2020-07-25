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
    let nums=  0;
    let numsStr = [];
    let {result,tt} = dfs(candidates,target)
    return result
    
};

function dfs(candidates,target,result=[],nums=0,numsStr=[0],index=0){

    for(let i=index;i<candidates.length;i++){
        let num = candidates[i];
        console.log(`i ${i} nums ${nums} ${numsStr[0]+num} ${JSON.stringify(numsStr)}`)
       if(numsStr[0]+num<7){
            console.log(`小`)
            numsStr.push(num)
            numsStr[0]+=num

            let obj = dfs(candidates,target,result,nums,numsStr,i);
            if(!obj.tt){
                numsStr[0] -= num;
                numsStr.pop()
            }else{
                console.log(`完成 i ${i} nums ${nums} ${JSON.stringify(numsStr)}  ${JSON.stringify(result)}`)
                return result
            }

        }else if(numsStr[0]+num>7){
            console.log(`大，递归回溯`)
            return {result,tt:false}
        }else{
            numsStr.push(num)
            numsStr.shift()
            result.push([...numsStr])
            console.log(`符合条件，递归回溯 ${JSON.stringify(numsStr)} `)
            console.log(`result ${JSON.stringify(result)}`)
            // nums = 0;
            numsStr.length = 0
            numsStr[0] = 0;

            return {result,tt:true}
        }
     
    }
    return {result,tt:true}
}


// @lc code=end

