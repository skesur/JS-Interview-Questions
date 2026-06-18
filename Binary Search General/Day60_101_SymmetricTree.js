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

var isSymmetric = function(root) {
    if (root === null) return true;

    const queue = [root.left, root.right];

    while (queue.length > 0) {
        const t1 = queue.shift();
        const t2 = queue.shift();

        if (t1 === null && t2 === null) continue;

        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;

        queue.push(t1.left);
        queue.push(t2.right);

        queue.push(t1.right);
        queue.push(t2.left);
    }

    return true;
};

console.log(isSymmetric(arrayToTree([1,2,2,3,4,4,3])))
console.log(isSymmetric(arrayToTree([1,2,2,null,3,null,3])))