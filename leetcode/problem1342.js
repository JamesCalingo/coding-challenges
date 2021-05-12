/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    while (num > 0) {
        if(num % 2 !== 0) {
            num -= 1
            steps++
        }else {
            num /= 2
            steps++
        }
    }
    return steps
};

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
