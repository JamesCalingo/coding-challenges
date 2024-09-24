/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        while(nums[i + 1] === nums [i]) {
            nums.splice(i + 1, 1)
        }
    }
    return nums.length
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// I thought about using a set for this, but that requires a variable when the problem asks you to do an in place operation, so it doesn't work
