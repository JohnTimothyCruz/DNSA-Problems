// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];

    const visited = {};

    for (let i = 0; i < nums.length; i++) {
        if (visited[target - nums[i]] !== undefined) return [visited[target - nums[i]], i];

        visited[nums[i]] = i;;
    };
};

console.log(twoSum([2, 7, 11, 15], 9));
