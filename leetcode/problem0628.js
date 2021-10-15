/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let maxProduct = nums[0] * nums[1] * nums[2]
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let product = nums[i] * nums[j] * nums[k]
                if(product > maxProduct) {
                    maxProduct = product
                }
            }
        }
    }return maxProduct
};

// This doesn't solve the problem due to it timing out on longer arrays, but LeetCode still lists it as a possible solution, so...

// I'll be sure to update this once I get a proper solution that doesn't time out.

// https://leetcode.com/problems/maximum-product-of-three-numbers/
