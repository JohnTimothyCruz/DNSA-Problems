// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    let sumAndLength = nums.length;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sumAndLength += i;
        sum += nums[i];
    };

    return sumAndLength - sum;
};

console.log(missingNumber([3, 0, 1]));
