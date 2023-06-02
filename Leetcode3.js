// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let subString = "";
    let arr = [];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (!subString.includes(s[i])) {
            subString += s[i];
        } else {
            arr.push(subString.length);
            subString = '';
            i = count++;
        };
    };

    arr.push(subString.length);
    return Math.max(...arr);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
