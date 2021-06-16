/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArr = s.split("").sort().join("")
    let tArr = t.split("").sort().join("")
   return sArr === tArr
};

// https://leetcode.com/problems/valid-anagram/
