// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

// Follow up: Could you do it in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
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

var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;
    let next = null;
    let reversed = null;

    for (let i = 0; i < right - left + 1; i++) {
        next = current.next;
        current.next = reversed;
        reversed = current;
        current = next;
    }

    prev.next.next = current;
    prev.next = reversed;

    return dummy.next;
};

console.log(listToArray(reverseBetween(arrayToList([1,2,3,4,5]),2,4)));
console.log(listToArray(reverseBetween(arrayToList([5]),1,1)));
