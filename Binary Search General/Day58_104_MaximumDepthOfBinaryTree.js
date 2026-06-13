// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function arrayToTree(arr) {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift();

        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

var maxDepth = function(root) {
    if (root === null) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};

console.log(maxDepth(arrayToTree([3,9,20,null,null,15,7])));
console.log(maxDepth(arrayToTree([1,null,2])));
console.log(maxDepth(arrayToTree([])));