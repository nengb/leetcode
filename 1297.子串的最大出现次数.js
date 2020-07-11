/*
 * @lc app=leetcode.cn id=1297 lang=javascript
 *
 * [1297] 子串的最大出现次数
 *
 * https://leetcode-cn.com/problems/maximum-number-of-occurrences-of-a-substring/description/
 *
 * algorithms
 * Medium (43.13%)
 * Likes:    22
 * Dislikes: 0
 * Total Accepted:    3.3K
 * Total Submissions: 7.7K
 * Testcase Example:  '"aababcaab"\n2\n3\n4'
 *
 * 给你一个字符串 s ，请你返回满足以下条件且出现次数最大的 任意 子串的出现次数：
 * 
 * 
 * 子串中不同字母的数目必须小于等于 maxLetters 。
 * 子串的长度必须大于等于 minSize 且小于等于 maxSize 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
 * 输出：2
 * 解释：子串 "aab" 在原字符串中出现了 2 次。
 * 它满足所有的要求：2 个不同的字母，长度为 3 （在 minSize 和 maxSize 范围内）。
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
 * 输出：2
 * 解释：子串 "aaa" 在原字符串中出现了 2 次，且它们有重叠部分。
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
 * 输出：3
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * 1 <= maxLetters <= 26
 * 1 <= minSize <= maxSize <= min(26, s.length)
 * s 只包含小写英文字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {

    let numCount = 0;
    let a = []
    for(let k=0;k<s.length;k++){
        for(let i=minSize;i<=maxSize;i++){
            if(numCount>0 && i>minSize){
                continue;
            }
            if(!a[i-minSize]){
                a[i-minSize] = {}
            }
            let c = s.substr(k,i)
            if(a[i-minSize][c]){
                a[i-minSize][c] ++
                if(a[i-minSize][c]>numCount){
                    numCount = a[i-minSize][c]
                }
            }else if(c.length == i){
                let difCount = countDifNum(c);
                if(difCount <= maxLetters){
                    a[i-minSize][c] = 1;
                    if(a[i-minSize][c]>numCount){
                        numCount = a[i-minSize][c]
                    }
                }
            }
        }
    }

    return numCount
};

//统计字符串中不同字母的数目
function countDifNum(c){
    let a= {};
    let count = 0;
    for(let i=0;i<c.length;i++){
        if(!a[c[i]]){
            a[c[i]]=1;
            count++;
        }
    }
    return count;
}
// @lc code=end

