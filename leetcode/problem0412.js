/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let stringArray = [];
    for(let i = 1; i <= n; i++){
        let indexString = i.toString()
        
        if(i % 3 === 0) {
         indexString = "Fizz"; 
        };
        if(i % 5 === 0) {
         indexString = "Buzz";
        };
        if(i % 3 === 0 && i % 5 === 0) {
            indexString = "FizzBuzz";
        };
       
    
        stringArray.push(indexString);
    }
    return stringArray;
};

// That's right: FizzBuzz is on LeetCode!

/** This solution isn't great however. 
  * As YouTuber Tom Scott puts it, if you need to add a new condition, then attempting to refactor THIS
  * can lead to more chances for an error to occur.
  */

// The better way to do this is to concatenate:

var fizzBuzz = function(n) {
    let stringArray = [];
    for(let i = 1; i <= n; i++){
        let indexString = "";
        
        if(i % 3 === 0) {
         indexString += "Fizz";
        };
        if(i % 5 === 0) {
         indexString += "Buzz";
        };
        if(indexString = "") {
          indexString = i.toString();
        };
        
        stringArray.push(indexString);
    }
    
    return stringArray;
};
    
// Note that the for loop in this starts at 1. I did that because the question specifically says 1-indexed.
// If you wanted to start at 0, the for loop would be:

// for(let i = 0; i < n; i++){};
  
// https://leetcode.com/problems/fizz-buzz/
  
// The Tom Scott video explaining the solution: https://www.youtube.com/watch?v=QPZ0pIK_wsc
