// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {
    const combined = nums1.concat(nums2);
    const ordered = combined.sort((a, b) => {
        return a - b;
    });

    if (ordered.length % 2 === 0) {
        return ((ordered[ordered.length / 2] + ordered[ordered.length / 2 - 1]) / 2);
    } else {
        return ordered[Math.floor(ordered.length / 2)];
    };
};

console.log(findMedianSortedArrays([1, 3], [2]));
