/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    let numsAb = [
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ]

    let result = []
    for(let i=0; i<digits.length; i++){
        //当前字符串
        let char = numsAb[digits[i]-2]
        //原长度
        let oldLen = result.length
        if(result.length>0){
            for(let m=0;m<oldLen*numsAb[digits[i]-2].length;m++){
                let j = m%oldLen
                let n =  Math.floor(m/oldLen)%char.length
                result[m] = result[j].slice(0,i)+char[n]
            }
        }else{
            for(let k=0;k<char.length;k++){
                result.push(char[k])
            }
        }
      
    }
  
    return result
};

// @lc code=end

