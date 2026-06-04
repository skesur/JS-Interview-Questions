// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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

var deleteDuplicates = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {
        if (prev.next.val === prev.next.next.val) {
            const dupVal = prev.next.val;
            while (prev.next !== null && prev.next.val === dupVal) {
                prev.next = prev.next.next;
            }
        } else {
            prev = prev.next;
        }
    }

    return dummy.next;
};

console.log(listToArray(deleteDuplicates(arrayToList([1,2,3,3,4,4,5]))));
console.log(listToArray(deleteDuplicates(arrayToList([1,1,1,2,3]))));