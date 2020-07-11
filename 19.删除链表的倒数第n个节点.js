/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (38.96%)
 * Likes:    881
 * Dislikes: 0
 * Total Accepted:    194.4K
 * Total Submissions: 498.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slowNode = {
        index:1,
        node:null
    };
    //存储头节点
    let headNode = head;
    //遍历节点
    do{
        
        if(slowNode.index > n){
            if(!slowNode.node){
                slowNode.node = headNode;
            }else{
                slowNode.node = slowNode.node.next;
            }
        }

        
        if( head.next === null ){
            if(slowNode.index - n === 0){
                //删除头节点
                if(headNode.next){
                    headNode.val = headNode.next.val;
                    headNode.next = headNode.next.next;
                }else{
                    return null;
                }
            }else{
            //删除中间和尾节点
                slowNode.node.next = slowNode.node.next.next;
            }
        }
        
        slowNode.index ++;
        head = head.next;

    }while(head !== null);


    return headNode;
};
// @lc code=end

