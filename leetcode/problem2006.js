/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let pairs = 0
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(Math.abs(nums[i] - nums[j]) === k) {
                pairs++
            }
        }
    }
    return pairs
};

// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
