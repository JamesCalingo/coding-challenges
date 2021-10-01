function countingValleys(steps, path) {
    // Write your code here
let altitude = 0;
let altitudes = [0]
let valleys = 0;
for(let i = 1; i <= steps; i++) {
    if (path[i-1] === "D") {
        altitude --
    }else{
        altitude++
    }
    altitudes.push(altitude)
    if(altitude < 0  && altitudes[i-1] ===0) {
        valleys++
    }
}
return valleys
