// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
    if (!root) return root;

    let stack = [root];

    while (stack.length) {
        let curr = stack.pop();
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if (curr.left) {
            stack.push(curr.left);
        };

        if (curr.right) {
            stack.push(curr.right);
        };
    };

    return root;
};

// Making binary tree here
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    };
};

let node1 = new TreeNode(4);
let node2 = new TreeNode(2);
let node3 = new TreeNode(7);
let node4 = new TreeNode(1);
let node5 = new TreeNode(3);
let node6 = new TreeNode(6);
let node7 = new TreeNode(9);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

// Test here
console.log(invertTree(node1));
