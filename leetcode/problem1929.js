/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArr = [...nums]
    for(let i = 0; i < nums.length; i++) {
        newArr.push(nums[i])
    }
    return newArr
};

// NOTE: I originally did this with two for loops, which works, but looks very silly...

// https://leetcode.com/problems/concatenation-of-array/
