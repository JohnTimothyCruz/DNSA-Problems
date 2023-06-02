// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor(nums.length / 2);

    while (left < right) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        };

        mid = Math.floor((left + right) / 2);
    };

    return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
