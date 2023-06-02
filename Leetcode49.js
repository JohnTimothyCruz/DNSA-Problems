// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
    const orderedStrs = {};

    if (strs.length === 1) return [strs];

    for (const str of strs) {
        const ordered = str.split('').sort().join('');

        if (orderedStrs[ordered]) {
            orderedStrs[ordered] = [...orderedStrs[ordered], str];
        } else {
            orderedStrs[ordered] = [str];
        };
    };

    return Object.values(orderedStrs);
};

console.log(groupAnagrams());
