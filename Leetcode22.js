// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var generateParenthesis = function (n) {
    let res = [];

    function helper(str, opens, closes) {
        if (opens > n || closes > n || closes > opens) return;
        if (str.length === n * 2) {
            res.push(str);
            return;
        };

        helper(str + '(', opens + 1, closes);
        helper(str + ')', opens, closes + 1);
    };

    helper('', 0, 0);

    return res;
};

console.log(generateParenthesis(3))
