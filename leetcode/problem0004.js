/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b)
    const isOddLength = merged.length % 2
    const middle = Math.floor(merged.length / 2)
    if (isOddLength) return merged[middle]
    return (merged[middle] + merged[middle - 1]) / 2
};

// This one's listed as a Hard, but I felt it wasn't actually that bad IMO (I think it's "hard" based on how LeetCode wants you to do it). A few things to keep in mind:

// 1. Without that function inside of the .sort() block, the nubmers get converted to strings while sorting, so you'll end up with [1, 10, 11...] instead of [1, 2, 3...]

// 2. Arrays are zero indexed, so the median of even-length arrays is between merged[middle] and the item BEFORE it.

// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
