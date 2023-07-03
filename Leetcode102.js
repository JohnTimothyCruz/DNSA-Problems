// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

var levelOrder = function (root) {
    if (!root) return [];

    res = [];
    let queue = [root];

    while (queue.length) {
        let length = queue.length;
        let level = [];

        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
    }

    return res;
};
