// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    const opens = "([{"
    const valids = ['()', '[]', '{}']

    const opensList = []

    for (const char of s) {
        if (opens.includes(char)) {
            opensList.push(char)
        } else {
            if (!opensList[0] || !valids.includes(opensList[opensList.length - 1] + char)) return false
            opensList.pop()
        }
    }

    if (opensList.length) return false
    return true
};

console.log(isValid('([{}])'))
