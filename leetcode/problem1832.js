/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
//     let alphabet = "qwertyuiopasdfghjklzxcvbnm".split("")
    let charsInSentence = []
   for(let i = 0; i < sentence.length; i++) {
        if(!charsInSentence.includes(sentence[i])) {
           charsInSentence.push(sentence[i])
           }
    }
    return charsInSentence.length === 26
};

// This works, but is kinda sorta insanely roundabout and consistently performed badly on time (i.e. don't expect to get into Google like this).
// I originally had an array of the alphabet, but once I realized I was comparing lengths saw that it wasn't needed.

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

