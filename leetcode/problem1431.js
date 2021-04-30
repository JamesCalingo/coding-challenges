/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let canHaveMost = []
    candies.forEach(child => {
        let extra = child + extraCandies
       canHaveMost.push(extra >= Math.max(...candies))
    })
    return canHaveMost
};

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
