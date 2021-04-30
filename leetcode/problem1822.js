/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = nums.reduce((a, b) => a * b)
    if(product > 0) return 1
    if(product < 0) return -1
    else return 0
};
