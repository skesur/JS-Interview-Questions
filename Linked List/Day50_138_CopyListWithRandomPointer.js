// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

function arrayToList(arr) {
    if (arr.length === 0) return null;

    const nodes = arr.map(([val]) => new ListNode(val));

    for (let i = 0; i < arr.length; i++) {
        nodes[i].next = i + 1 < arr.length ? nodes[i + 1] : null;
        nodes[i].random = arr[i][1] !== null ? nodes[arr[i][1]] : null;
    }

    return nodes[0];
}

function listToArray(head) {
    const nodes = [];
    let current = head;

    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }

    return nodes.map(node => [
        node.val,
        node.random ? nodes.indexOf(node.random) : null
    ]);
}

var copyRandomList = function(head) {
    if (!head) return null;
    const map = new Map();

    let current = head;
    while (current !== null) {
        map.set(current, new ListNode(current.val));
        current = current.next;
    }

    current = head;
    while (current !== null) {
        const copy = map.get(current);
        copy.next = current.next ? map.get(current.next) : null;
        copy.random = current.random ? map.get(current.random) : null;
        current = current.next;
    }

    return map.get(head);
};

console.log(listToArray(copyRandomList(arrayToList([[7,null],[13,0],[11,4],[10,2],[1,0]]))));
console.log(listToArray(copyRandomList(arrayToList([[1,1],[2,1]]))));
console.log(listToArray(copyRandomList(arrayToList([[3,null],[3,0],[3,null]]))));
