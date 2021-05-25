/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let shuffled = ""
    for(let i = 0; i < s.length; i++) {
        let index = indices.indexOf(i)
        shuffled += s[index]
    }
    return shuffled
};

// https://leetcode.com/problems/shuffle-string
