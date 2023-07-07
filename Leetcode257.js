// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

var binaryTreePaths = function (root) {
    let paths = [];

    function helper(root, path) {
        if (!root) return;

        path += root.val.toString();

        if (!root.left && !root.right) {
            paths.push(path);
        } else {
            path += '->';
            helper(root.left, path);
            helper(root.right, path);
        };
    };

    helper(root, '');

    return paths;
};

// Making binary tree here
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
};

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node2.right = node4;

// Test here
console.log(binaryTreePaths(node1));
