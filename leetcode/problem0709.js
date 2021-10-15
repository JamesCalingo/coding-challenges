/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.toLowerCase()
};

// This is all you normally have to do. Better yet, LeetCode accepts this as a correct answer!



// ...Okay, fine. Here's the actual solution I came up with:

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let splitStr = str.split("")
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        if(code >= 65 && code <= 90) {
            code += 32
            splitStr[i] = String.fromCharCode(code)
        }
    }
    return splitStr.join("")
};

// Remember that strings are immutable in JavaScript, so I used an array to be able to change the necessary values.

// https://leetcode.com/problems/to-lower-case/
