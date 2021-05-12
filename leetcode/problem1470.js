/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffled = []
    for(let i = 0; i < n; i++){
        shuffled.push(nums[i], nums[i + n])
    }
    return shuffled
};

// https://leetcode.com/problems/shuffle-the-array/
