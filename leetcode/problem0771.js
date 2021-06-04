/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let numberOfJewels = 0
    let jewelArr = jewels.split("")
    let stoneArr = stones.split("")
    for(let i = 0; i < stoneArr.length; i++) {
        if(jewelArr.includes(stones[i])) {
            numberOfJewels++
        }
    }
    return numberOfJewels

};

// NOTE: I'm sure there's a RegEx solution that looks fancier, but I'm not entirely sure how to implement it yet...

// https://leetcode.com/problems/jewels-and-stones/
