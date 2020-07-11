/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (42.46%)
 * Likes:    553
 * Dislikes: 0
 * Total Accepted:    103.1K
 * Total Submissions: 242.9K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null){
        return null;
    }
    let midNode = findMid(head);
    midNode.next = reverseList(midNode.next);
    let n1 = head;
    let n2 = midNode.next;
    while(n1 !== null && n2 !== null && n1.val === n2.val ){
        n1 = n1.next;
        n2 = n2.next;
    }

    return n2 === null;
};

//查找单链表中点
function findMid(node){
    if(node === null){
        return null;
    }
    let midNode = node;
    node = node.next;
    while(node !== null && node.next !== null ){
        midNode = midNode.next
        node = node.next.next;
    }
    return midNode;
}

//翻转链表
var reverseList = function(head) {
    let prevNode = null;
    while(head !== null){
        //获取下一个节点
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
};
// @lc code=end

