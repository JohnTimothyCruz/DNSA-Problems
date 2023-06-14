// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let chars = {};
    let left = 0;
    let right = 0;
    let currMax = 0;

    while (right < s.length) {
        if (chars[s[right]] > 0) {
            chars[s[left]]--;
            left++;
        } else {
            chars[s[right]] = 1;
            right++;
            currMax = Math.max(currMax, right - left);
        };
    };

    return currMax;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
