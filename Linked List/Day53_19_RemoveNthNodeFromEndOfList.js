// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function arrayToList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

var removeNthFromEnd = function(head, n) {
    let current = head;
    let dummy = new ListNode(0);
    let tail = dummy;
    let num1 = 0;
    let num2 = listToArray(head).length-n;
    while (current !== null) {
        if (num1!==num2){
            tail.next = new ListNode(current.val);
            tail = tail.next;
        }
        current = current.next;
        num1++;
    }
    return dummy.next; 
};

console.log(listToArray(removeNthFromEnd(arrayToList([1,2,3,4,5]),2)));
console.log(listToArray(removeNthFromEnd(arrayToList([1]),1)));
console.log(listToArray(removeNthFromEnd(arrayToList([1,2]),1)));