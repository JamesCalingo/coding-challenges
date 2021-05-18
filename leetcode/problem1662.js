/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = word1.join("")
    let str2 = word2.join("")
    if(str1.length !== str2.length) return false
   for(let i = 0; i < str1.length; i++){
       if(str1[i] !== str2[i]) return false
   }
    return true
};

// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
