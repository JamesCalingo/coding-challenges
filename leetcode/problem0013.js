/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function findNum(index)
        {return sequence.find((elem) => elem.char === s[index])}

    let result = 0
    let sequence = [
        {char: "I", value: 1},
        {char: "V", value: 5}, 
        {char: "X", value: 10}, 
        {char: "L", value: 50},
        {char: "C", value: 100}, 
        {char: "D", value: 500},
        {char: "M", value: 1000}
        ]
  
    for (let i = 0; i < s.length; i++) { 
        let int = (findNum(i))
        if(sequence.indexOf(findNum(i)) - sequence.indexOf(findNum(i + 1)) < 0){
            let next = findNum(i+1)
            result += next.value - int.value
            i += 1
        }
        else result += int.value
        }
    return result
};

// https://leetcode.com/problems/roman-to-integer/description/

// This was my first LeetCode problem in a while, so it's a bit...interesting. A map would have made this better, but I wasn't super certain on how that would work.
