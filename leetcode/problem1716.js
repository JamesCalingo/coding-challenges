/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0;
    for(let i = 1; i <=n; i++) {
          let week = Math.floor(i / 7);
            if(i % 7 === 0) {
                total += 7 + (week - 1);
            } else {
                total += week + (i % 7);
            }
        };
    
      return total;  
};

// This one was interesting. The hardest part, by far, was figuring out how the math works.

// https://leetcode.com/problems/calculate-money-in-leetcode-bank/
