// 169. Majority Element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    let majority = 0;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            majority = num;
        };

        if (majority === num) {
            count++;
        } else {
            count--;
        };
    };

    return majority;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
