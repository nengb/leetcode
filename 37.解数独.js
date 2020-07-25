/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let l = []  
    let r = []
    let k = []
    //初始化数据结构
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            let num = board[i][j]
            let h = Math.floor((i)/3); 
            let m = Math.floor((j)/3); 
            let k_index = m+(h*3)
            if(num!='.'){
                !l[i] ? l[i] = {}:null;
                !r[j] ? r[j] = {}:null;
                !k[k_index] ? k[k_index]  = {}:null;

                l[i][num] =  1
                r[j][num] = 1
                k[k_index][num] = 1
            }
        }
    }

    dfs(board,l,r,k,0,0)
};
/* 
 * board array [][] 结果数组
 * l array 数组，存每行数据的数字,用来快速查找每一行不存在的数字
 * r array 数组，存每列数据的数字,用来快速查找每一列不存在的数字
 * k array 数组，存每3x3块的数字,用来快速查找每一块不存在的数字
 * i_index number 行定位，快速定位
 * j_index number 列定位，快速定位
 */
function dfs(board,l,r,k,i_index,j_index){
    for(let i=i_index;i<board.length;i++){
        for(let j=j_index;j<board[i].length;j++){
            let num = board[i][j]
            let h = Math.floor((i)/3); 
            let m = Math.floor((j)/3); 
            let k_index = m+(h*3)

            !l[i] ? l[i] = {}:null;
            !r[j] ? r[j] = {}:null;
            !k[k_index] ? k[k_index]  = {}:null;

            if(num=='.'){
                let resultNum = findNum(l[i],r[j],k[k_index])
                if(resultNum.length == 0){
                    return false
                }
                for(let p = 0;p<resultNum.length;p++){
                    let num = resultNum[p];
                    
                    board[i][j] = num;
                    l[i][num] =  1
                    r[j][num] = 1
                    k[k_index][num] = 1
                    let dd = dfs(board,l,r,k,i,j)
                    if(dd){
                        return dd
                    }else{
                        board[i][j] = '.'
                        l[i][num] =  0
                        r[j][num] = 0
                        k[k_index][num] = 0
                    }
                }

                return false
            }
        }
        j_index=0
    }
    return board
}

function findNum(l_obj,r_obj,k_oj){
    let result = []
    for(let i=1;i<=9;i++){
         if(!l_obj[i] && !r_obj[i] && !k_oj[i]){
            result.push(i+'')
         }     
    }
    return result
}



// @lc code=end


