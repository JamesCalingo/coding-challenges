/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let words = s.trim().split(" ")
    let lastWord = words[words.length - 1]

    return lastWord.length
};
