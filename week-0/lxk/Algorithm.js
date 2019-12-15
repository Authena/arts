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

var reverseBetween = function(head, m, n) {
  if (m === n) return head;
  let times = n - m + 1;

  let newHead = {
    value: null,
    next: head
  };
  let pre = newHead;
  for (let i = 1; i < m; i++) {
    pre = pre.next;
  }
  if (!pre.next) return newHead.next;
  //翻转
  let h = pre;
  let cur = null;
  pre = pre.next;
  for (let i = 1; i < times; i++) {
    cur = pre.next;
    pre.next = cur.next;
    cur.next = h.next;
    h.next = cur;
  }
  return newHead.next;
};
