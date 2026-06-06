// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:

// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
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

var partition = function(head, x) {
    const lessHead = new ListNode(0);
    const greaterHead = new ListNode(0);
    
    let less = lessHead;
    let greater = greaterHead;
    let current = head;

    while (current !== null) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }
        current = current.next;
    }

    greater.next = null;
    less.next = greaterHead.next;

    return lessHead.next;
};

console.log(listToArray(partition(arrayToList([1,4,3,2,5,2]), 3)));
console.log(listToArray(partition(arrayToList([2,1]), 2)));
console.log(listToArray(partition(arrayToList([1,4,3,0,2,5,2]), 3)));