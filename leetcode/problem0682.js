/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let score = []
    for(let i = 0; i < ops.length; i++){
        if(parseInt(ops[i])){
            score.push(parseInt(ops[i]))
        }
        if(ops[i] === "C"){
            score.pop()
        }
        if(ops[i] === "D"){
            score.push(score[score.length - 1] * 2)
        }
        if(ops[i] === "+"){
            score.push(score[score.length - 1] + score[score.length - 2])
        }
    }
return score.reduce((a, b) => a+b)
};

// You're probably thinking that this looks way too verbose - and it is!
// Here's basically the same solution written a bit more succinctly:

var calPoints = function(ops) {
    let score = []
    for(let i = 0; i < ops.length; i++){
        switch(ops[i]) {
      
            case  "C":
            score.pop()
            break
                
            case  "D":
            score.push(score[score.length - 1] * 2)
            break
                
            case  "+":
            score.push(score[score.length - 1] + score[score.length - 2])
            break
        
            default:
            score.push(parseInt(ops[i]))
    }
    }
return score.reduce((a, b) => a+b)
};

// It's probably hard to understand for pure beginners, but you can see how it's a bit "easier" than a bunch of if statements.

// https://leetcode.com/problems/baseball-game/
