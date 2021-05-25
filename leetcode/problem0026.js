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
