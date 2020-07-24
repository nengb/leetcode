/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let a = {
        1:"I",
        // 4:"IV",
        5:"V",
        // 9:"IX",
        10:"X",
        // 40:"XL",
        50:"L",
        // 90:"XC",
        100:"C",
        // 400:"CD",
        500:"D",
        // 900:"CM",
        1000:"M",
    }

    if(a[num]){
        return a[num]
    }

    num = num+''
    let str = ''
    for(let i=0;i<num.length;i++){
        let position = 10**(num.length-1-i)
        let charNum = position*num[i]
        if(num[i]==0){
            continue;
        }
        console.log(charNum)
        if(a[charNum]){
            str+=a[charNum]
        }else{
            let charIndex = num[i]>5 ?10:5; 
            let char ;
           
            if(5-num[i] == 1 || 10 - num[i] == 1){
                char = a[position]+ a[charIndex*position]
            }else{
                let startCharIndex = num[i]>5?5:1
                char = a[startCharIndex*position]
                console.log(char)
                console.log(charIndex-num[i])
                for(let k=0;k<num[i] - startCharIndex ;k++){
                    char+= a[position] 
                }
            }
            str+=char               
        }
    }
    return str
    
};
// @lc code=end

