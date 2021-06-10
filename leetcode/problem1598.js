/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let operations = 0;
    for(let i = 0; i < logs.length; i++) {
        if(logs[i] === "../" && operations > 0) {
            operations --;
        }else if(logs[i] === "../" && operations === 0) {
            operations = 0;
        }
        else if (logs[i] !== "./") {
            operations ++;
        }
    };
    if(operations < 0) {
        operations = 0;
    };
    return operations;
};

// This one took a while due to all of the considerations and is still very slow (>100ms), so it's probably not ideal.

// https://leetcode.com/problems/crawler-log-folder/
