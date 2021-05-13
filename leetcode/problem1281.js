/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digits = n.toString().split("")
    let nums = []
   digits.forEach((digit) => {
       let num = parseInt(digit)
      nums.push(num)  
   })
    
    let product = digits.reduce((a, b) => a * b)
    let sum = nums.reduce((a, b) => a + b)
    
    return product - sum
};

// I'm aware that this probably isn't the best due to the creation of two arrays, but it works...

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
