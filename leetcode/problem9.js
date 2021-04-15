/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let splitStr = str.split('')
    let reverse = splitStr.reverse().join('')
    return str == reverse
};
