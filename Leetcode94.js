// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function (root) {
    const stack = [];
    const res = [];
    let curr = root

    while (curr || stack.length) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right;
        }
    }

    return res;
}

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
console.log(inorderTraversal(node1));
