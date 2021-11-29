/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString()
    const reverse = str.split("").reverse().join("")
    return str == reverse
};
// https://leetcode.com/problems/palindrome-number/

// UPDATE NOV 29: Changing reverse to single line and using const for everything since there's no changes made to variables.
