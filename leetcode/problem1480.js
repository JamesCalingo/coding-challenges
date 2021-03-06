/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sums = []
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for(let j = 0; j <= i; j++) {
            sum += nums[j]
        }
        sums.push(sum)
    }
    return sums
};

// https://leetcode.com/problems/running-sum-of-1d-array/
