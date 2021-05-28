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

var reverseString = function(s) {
    for(let i = s.length - 1; i >= 0; i--) {
            s.push(s[i]);
    }
    let half = s.length / 2
    s.splice(0, half)
};

// The only issue is that this ends up consistently in the bottom 15% on memory...again, try reversing "Chargoggagoggmanchauggagoggchaubunagungamaugg" with this

// https://leetcode.com/problems/reverse-string/
