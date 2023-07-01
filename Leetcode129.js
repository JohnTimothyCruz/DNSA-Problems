// 129. Sum Root to Leaf Numbers

// You are given the root of a binary tree containing digits from 0 to 9 only.
// Each root-to-leaf path in the tree represents a number.
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
// A leaf node is a node with no children.

var sumNumbers = function(root) {
    function helper(root, sum) {
        if (!root) return 0;
        sum = sum * 10 + root.val;
        if (!root.left && !root.right) return sum;

        return helper(root.left, sum) + helper(root.right, sum);
    };

    return helper(root, 0);
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
node1.left = node3;

// Test here
console.log(sumNumbers(node1));
