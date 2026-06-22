// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var buildTree = function(inorder, postorder) {
    const inorderIndex = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndex.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function build(left, right) {
        if (left > right) return null;

        const rootVal = postorder[postIndex];
        postIndex--;
        const root = new TreeNode(rootVal);

        const mid = inorderIndex.get(rootVal);

        root.right = build(mid + 1, right);
        root.left = build(left, mid - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};