// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    for (let string of strs) {
        while (prefix !== string.slice(0, prefix.length)) {
            prefix = prefix.slice(0, -1)
            if (prefix === '') return ''
        }
    }

    return prefix
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
