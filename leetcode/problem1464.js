/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if((nums[i] - 1) * (nums[j] - 1) > max) {
                max = (nums[i] - 1) * (nums[j] - 1)
            }
        }
    }
    return max
};

// NOTE: I got wildly incosnstent times on this one...but generally on the high end.

// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
