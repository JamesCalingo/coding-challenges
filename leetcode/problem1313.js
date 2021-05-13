/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let decompressed = []
    for(let i=0; i < nums.length; i += 2) {
        for(let j = 0; j < nums[i]; j++){
            decompressed.push(nums[i + 1])
        }
    }
    return decompressed
};

// https://leetcode.com/problems/decompress-run-length-encoded-list/
