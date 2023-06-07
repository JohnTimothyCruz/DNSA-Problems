// 144. Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    let stack = [root];
    let res = [];

    while (stack.length) {
        let curr = stack.pop();

        if (curr) {
            res.push(curr.val);

            if (curr.right !== null) {
                stack.push(curr.right);
            };

            if (curr.left !== null) {
                stack.push(curr.left);
            };
        };
    };

    return res;
};

// Making binary tree here
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    };
};

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);

node1.right = node2;
node2.left = node3;

// Test here
console.log(preorderTraversal(node1));
