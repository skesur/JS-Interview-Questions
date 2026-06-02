// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

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

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        const kth = getKth(groupPrev, k);
        if (!kth) break;

        const groupNext = kth.next;
        const curr = groupPrev.next;

        let prev = groupNext;
        let current = groupPrev.next;
        while (current !== groupNext) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        groupPrev.next = kth;
        groupPrev = curr;
    }

    return dummy.next;
};

function getKth(current, k) {
    while (current !== null && k > 0) {
        current = current.next;
        k--;
    }
    return current;
}

console.log(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 2)));
console.log(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 3)));