/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = parseInt(x.toString().split('').reverse().join(''))
    if(x < 0) {
        reversed *= -1
    }
    if (-(2**31) < reversed && reversed < 2**31 - 1){
        return reversed}
    else return 0
};

// https://leetcode.com/problems/reverse-integer/
// Hoping to optimize the if statement - for some reason, that ended up holding me up for a LONG time (x < y < z didn't work for some reason).
