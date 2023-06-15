// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    targetSum -= root.val;

    if (!root.left && !root.right) return targetSum === 0;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// Making binary tree here
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    };
};

let node1 = new TreeNode(5);
let node2 = new TreeNode(4);
let node3 = new TreeNode(8);
let node4 = new TreeNode(11);
let node5 = new TreeNode(7);
let node6 = new TreeNode(2);
let node7 = new TreeNode(13);
let node8 = new TreeNode(4);
let node9 = new TreeNode(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node4.left = node5;
node4.right = node6;
node3.left = node7;
node3.right = node8;
node8.right = node9;

// Test here
console.log(hasPathSum(node1, 22))
