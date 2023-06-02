// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let res = {};

    for (let num of nums) {
        if (num in res) {
            delete res[num];
        } else {
            res[num] = num;
        };
    };

    return Object.values(res)[0];
};

console.log(singleNumber([2, 0, 2, 0, 1]));
