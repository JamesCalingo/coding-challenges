/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
 for(let i = digits.length - 1; i >= 0; i--) {
     if(digits[i] === 9) {
         digits[i] = 0
     }else{
         digits[i] += 1
         return digits
};
     }
    digits.unshift(1)
    return digits
 }
 
//  I tried changing the digits to a number and then adding to that, but that doesn't work due to 32 bit overflow - if a number "translates" to something bigger than 32 bits, then JS will be unable to process it properly.

//  https://leetcode.com/problems/plus-one/
