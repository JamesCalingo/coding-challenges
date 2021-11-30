/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i
        }else if (nums[i] > target) {
            return i
        }else if ( i === nums.length - 1 && nums[i] < target){
            return i + 1
        }
    }
};


// This version combines the first two if statements using ||
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target || nums[i] > target) {
            return i
        }else if ( i === nums.length - 1 && nums[i] < target){
            return i + 1
        }
    }
};

// As it turns out, the else statement is completely unnecessary!
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target || nums[i] > target) {
            return i
        }    
    }
    return nums.length
};

// https://leetcode.com/problems/search-insert-position/
