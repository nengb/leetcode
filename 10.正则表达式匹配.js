/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * 
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let b = {'.':true,'*':true}
    let l = 0;
    let m = 0;
    // let pArr = [];
    // for(let i=0;i<p.length;p++){
    //     let char = p[i];
    //     let num = 0;
    //     let noRe = false;
    //     if(p[i+1] == '*'){

    //     }

    //     pArr.push({char,num,noRe:})
    // }
    
    let num = -1;
    while(l<s.length || m<p.length){
        console.log(`l ${l} m ${m}  s[l] ${s[l]}  p[m] ${p[m]}`)
        if(s[l] == p[m]){
            l++;
            m++;
        }else{
            if(p[m] == '.'){
                l++;
                m++;
            }else if(p[m]=='*'){
                if(p[m-1] =='.'){
                    console.log(`结束 l ${l} m ${m}  s[l] ${s[l]}  p[m] ${p[m]}`)
                    if(m < p.length-1){
                        console.log(s.slice(l,s.length))
                        console.log(p.slice(m+1,p.length))
                        let str = p.slice(m+1,p.length)
                        for(let i=0;i<str.length;i++){
                            if(str[i+1] == '*'){
                                str = str.slice(2,str.length)
                                i=-1
                            }
                            if(str[i]=='.'){
                                str = str.slice(1,str.length)
                                i=-1
                            }
                        }
                        console.log(str.length)
                        if(str.length==0){
                            return true;
                        }
                        let strS = '';

                     
                        for(let i=0;i<s.length;i++){
                            if(s[i] == str[0]){
                                strS= s.slice(i,s.length);
                            }
                        }


                        console.log("strS")
                        console.log(strS)
                        console.log(str)
                        return isMatch(strS,str)
                    }
                    return true;
                }else{
                    if(s[l-1] != p[m-1]){

                        m++;
                        // l++;

                    }else{
                        if(s[l] != s[l-1]){
                            m++;
                        }else{
                            if(num == -1){
                                num = 0;
                                for(let i=m+1;i<p.length;i++){
                                    if(p[i] == p[m-1]){
                                        num++;
                                    }else{
                                        if(p[i+1]=='*'){
                                            i++;
                                        }else{
                                            break;
                                        }
                                    }
                                }
                            }
                            

                            console.log(`相对 l ${l} m ${m}  s[l] ${s[l]}  p[m] ${p[m]} num ${num}`)

                            if(s[l+1+num] != s[l]){
                                m++;
                                if(p[m+1]!='*'){
                                    l++
                                }
                            }else{
                                l++;
                            }
                            
                            


                            // if(p[m+1] == p[m-1]){
                            //     let num = 1;
                            //     for(let i=m+2;i<p.length;i++){
                            //         if(p[i] == p[m-1]){
                            //             num++;
                            //         }else{
                            //             break;
                            //         }
                            //     }

                            //     if(s[l+1+num] != s[l]){
                            //         m++;

                            //         if(p[m+1]!='*'){
                            //             l++
                            //         }
                            //     }else{
                            //         l++;
                            //     }
                            //     // l++;
                            // }else{
                            //     l++;
                            // }

                        }   
                    }
                }

            }else{
                num = -1
                if(p[m+1] != '*'){
                    console.log(`结束2 l ${l} m ${m}  s[l] ${s[l]}  p[m] ${p[m]}`)


                    return false;
                }else{
                    m++;
                }
            }

        }

    }
    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isMatch;
// @after-stub-for-debug-end