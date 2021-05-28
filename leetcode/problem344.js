/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse()
};

// Of course, this wasn't what LeetCode intended you to do (and you'd probably be considered a smart aleck if you pulled this in an interview).
// A more "codey" solution would be:

var reverseString = function(s) {
    let reversed = [];
    for(let i = s.length - 1; i >=0; i--) {
        reversed.push(s[i])
    }
    return reversed
};

// BUT! This requires an extra variable, which adds space complexity (imagine creating a second array to reverse "Chargoggagoggmanchauggagoggchaubunagungamaugg").
// LeetCode wants this done without any extra storage allocations, so to do that:

// (working on this)

// https://leetcode.com/problems/reverse-string/
