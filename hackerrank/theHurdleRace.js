function hurdleRace(k, height) {
    // Write your code here

let maxHurdle = height[0]
for(let i = 1; i < height.length; i++) {
if(height[i] > maxHurdle) {
 maxHurdle = height[i]   
  }
}
let doses = maxHurdle - k
if(doses < 0) {
    doses = 0
}
return doses
}

// NOTE: The entire for loop is actually unnecessary if maxHurdle is changed to the following: 
let maxHurdle = Math.max(...height)
