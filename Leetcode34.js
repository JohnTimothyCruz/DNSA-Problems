// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {
    let res = [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            res[0] = mid;
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };

    left = res[0];
    right = nums.length - 1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            res[1] = mid;
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };

    return res;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
