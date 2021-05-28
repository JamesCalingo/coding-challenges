/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 let words = s.split(" ");
 let reversedWords = [];
 words.forEach(word => {
     reversedWords.push(word.split("").reverse().join(""));
 });
    return reversedWords.join(" ");
};

// https://leetcode.com/problems/reverse-words-in-a-string-iii/
