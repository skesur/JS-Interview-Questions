// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
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

function treeToArray(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node !== null) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

var isSameTree = function(p, q) {
    if (p==null && q==null) return true;
    else {
        let p1 = treeToArray(p);
        let q1 = treeToArray(q);
        if (p1.length != q1.length) return false;
        else {
            for (let i=0;i<p1.length;i++) {
                if (p1[i]!=q1[i]) return false;
            }
        }
    }
    return true;
};

// var isSameTree = function(p, q) {
//     if (p === null && q === null) return true;
//     if (p === null || q === null) return false;
//     if (p.val !== q.val) return false;

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

console.log(isSameTree(arrayToTree([1,2,3]),arrayToTree([1,2,3])));
console.log(isSameTree(arrayToTree([1,2]),arrayToTree([1,null,2])));
console.log(isSameTree(arrayToTree([1,2,1]),arrayToTree([1,1,2])));