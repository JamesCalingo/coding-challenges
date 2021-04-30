/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let totals = []
  accounts.forEach(account => {
      let total = account.reduce((a, b) => a + b)
      totals.push(total)
  })
 return Math.max(...totals)
};

// https://leetcode.com/problems/richest-customer-wealth/
