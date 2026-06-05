// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
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

var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
};

console.log(listToArray(rotateRight(arrayToList([1,2,3,4,5]),2)));
console.log(listToArray(rotateRight(arrayToList([0,1,2]),4)));
console.log(listToArray(rotateRight(arrayToList([]),1)));