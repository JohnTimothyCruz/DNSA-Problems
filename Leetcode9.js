// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    if (x < 0) return false;

    const num = x.toString().split('');
    const numRev = x.toString().split('').reverse();
    return num.join('') === numRev.join('');
};

console.log(isPalindrome(121));
