/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (66.11%)
 * Likes:    545
 * Dislikes: 0
 * Total Accepted:    122.6K
 * Total Submissions: 185.5K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(!head || !head.next){
        return head
    }
    let b = head.next;
    let c= head.next.next;
    
    head.next.next = head;
    head.next = c;
    head = b;

    
    if(!head.next.next){
        return head;
    }

    let bb =  swapPairs(c)
    head.next.next = bb
    return head
};
// @lc code=end

