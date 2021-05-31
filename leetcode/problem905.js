/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let newNums = []
    nums.forEach(num => {
        if(num % 2 === 0) {
            newNums.push(num)
        }     
    })
    nums.forEach(num => {
        if(num % 2 !== 0){
           newNums.push(num)
           }
    })
    return newNums
};

// This probably isn't SUPER ideal since you're technically iterating through the array TWICE, but it works...

// https://leetcode.com/problems/sort-array-by-parity/
