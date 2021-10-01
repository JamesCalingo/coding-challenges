function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
let cost = -1
for(let i = 0; i < keyboards.length; i++) {
    for(let j = 0; j < drives.length; j++) {
        let pair = keyboards[i] + drives[j]
        if(pair <= b && pair > cost) {
            cost = pair
        }
    }
}
return cost
}
