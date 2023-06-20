// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(p, q) {
    let queueP = [p];
    let queueQ = [q];

    while (queueP.length && queueQ.length) {
        if (queueP.length !== queueQ.length) return false;

        let currP = queueP.pop();
        let currQ = queueQ.pop();

        if (currP?.val !== currQ?.val) return false;

        if (currP?.left !== undefined) queueP.push(currP.left);
        if (currP?.right !== undefined) queueP.push(currP.right);
        if (currQ?.left !== undefined) queueQ.push(currQ.left);
        if (currQ?.right !== undefined) queueQ.push(currQ.right);
    };

    return true;
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

let node4 = new TreeNode(1);
let node5 = new TreeNode(2);
let node6 = new TreeNode(3);

node4.right = node5;
node5.left = node6;

// Test here
console.log(isSameTree(node1, node2))
