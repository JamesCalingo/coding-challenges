/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   let smallerNums = []
    nums.forEach(num => {
        let smallerThanI = 0;
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] < num) {
                smallerThanI++
            }
        }
        smallerNums.push(smallerThanI)
    })
    return smallerNums
};

// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
