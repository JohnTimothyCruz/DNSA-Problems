// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    digits[digits.length - 1] += 1;

    digits.reverse().forEach((digit, i) => {
        if (digit === 10) {
            digits[i] = 0;
            if (digits[i + 1]) {
                digits[i + 1] += 1;
            } else {
                digits[i + 1] = 1;
            };
        };
    });

    return digits.reverse();
};

console.log(plusOne([1, 2, 9, 9]));
