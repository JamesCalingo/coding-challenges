/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let str = ""
    for(let i = 0; i < command.length; i++) {
        if(command[i] === "G") {
            str += "G"
        }
        if(command[i] === "(" && command[i + 1] === ")") {
            str+= "o"
        }
        if(command[i] === "(" && command[i + 1] === "a"){
            str += "al"
        }
    }
    return str
};

// Not gonna lie...this approach seems bad. I'm going to try to work on a better solution, which will likely involve this:
    // let pieces = {
    //     "G": "G",
    //     "()": o,
    //     "(al)": al
    // }

// https://leetcode.com/problems/goal-parser-interpretation/
