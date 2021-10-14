/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let newArr = []
    for(let i = 0; i < nums.length; i++) {
        let value = nums[nums[i]]
        newArr.push(value)
    }
    return newArr
};

// https://leetcode.com/problems/build-array-from-permutation/
