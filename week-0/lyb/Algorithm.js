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
// var reverseBetween = function(head, m, n) {
//     let cur = head;
//     let arr = [];
//     let pre = null;
//     for(let i = 1; cur!=null; i++){
//         if(i+1 === m){
//             pre = cur;
//         }
//         if(i >= m && i <= n) {
//             arr.push(cur);
//         }
//         cur = cur.next;
//     }
//     if(pre === null) {
//         head = arr[arr.length-1];
//     }
    
//     cur = arr.pop()
//     let next = cur.next;
//     if(pre === null) {
//         head = cur;
//     } else {
//         pre.next = cur;
//     }
//     pre = cur;
//     cur = arr.pop();
//     while(cur){
//         pre.next = cur;
//         pre = cur;
//         cur = arr.pop();
//     }
//     pre.next = next;
//     return head;
// };
var reverseBetween = function(head, m, n) {
    let prev = null;
    let newHead = new ListNode(null);
    newHead.next = head;
    let cur = newHead;
    while(m>0){
        prev = cur;
        cur = cur.next;
        m--;
        n--;
    }
    let first = cur;
    let pre = prev;
    while(n>=0){
        [cur.next, pre, cur] = [pre, cur, cur.next];
        n--;
    }
    prev.next = pre;
    first.next = cur;
    return newHead.next;
}
