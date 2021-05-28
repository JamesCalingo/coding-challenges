/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let negatives = 0
    grid.forEach(arr => {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < 0) {
                negatives++
            }
        }
    })
    return negatives
};

// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
