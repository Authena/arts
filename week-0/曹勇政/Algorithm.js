/**
 * 题目 https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

/**
 * 在线code https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-caoyongzheng-4/
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let root = {
        next: head,
    };
    let headTail = root;

    for (let i = 1; i < m; i++) {
        headTail = headTail.next;
    }

    const mNode = headTail.next;

    // exchange
    for (let i = m + 1; i <= n; i++) {
        const nNode = mNode.next;
        mNode.next = nNode.next;
        nNode.next = headTail.next;
        headTail.next = nNode;
    }
    return root.next;
};
