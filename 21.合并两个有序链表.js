/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (63.27%)
 * Likes:    1142
 * Dislikes: 0
 * Total Accepted:    310K
 * Total Submissions: 490K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
       
    //头节点
    let headNode = {};
    //尾节点
    let lastNode = headNode;
    

    while(l1 !== null && l2 !== null){
       
        if(  l1.val <= l2.val ){
            lastNode.next = l1;
            l1 = l1.next;
           
        }else{
            lastNode.next = l2;
            l2 = l2.next;
        }
        
        lastNode = lastNode.next;
    }
    
    if(l1 !== null){
        lastNode.next = l1;
    }else{
        lastNode.next = l2;
    }
    
    
    return headNode.next;
};
// @lc code=end

