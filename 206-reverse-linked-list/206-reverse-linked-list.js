/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if ( head === null || head.next === null) return head;
    let newHead = new ListNode()
    while (head !== null){
        next = head.next
        head.next = newHead.next;
        newHead.next = head;
        head = next;
    }
    return newHead.next
};