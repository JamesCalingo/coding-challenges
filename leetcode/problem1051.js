/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let mismatches = 0;
    let expected = [...heights];
  expected.sort((a, b) =>  a - b);
    for(let i = 0; i < heights.length; i++){
        if(heights[i] !== expected[i]){
            mismatches++;
        };
    };
    return mismatches;
};

  // NOTE: having heights.sort() anywhere in the code will change the INPUT ARRAY, thus rendering the for loop basically useless.
  // Also, don't forget that without the a - b function, expected will end up being [1, 10, 11, 2, etc...]

// https://leetcode.com/problems/height-checker/
