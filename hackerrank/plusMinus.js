function plusMinus(arr) {
    // Write your code here
let positives = 0
let negatives = 0
let zeroes = 0
let denominator = arr.length
for(let i = 0; i < denominator; i++) {
   if(arr[i] > 0) {
       positives++
   }
   else if(arr[i] < 0) {
       negatives++
   }
   else {
       zeroes++
   }
}
console.log(
    `${(positives / denominator).toFixed(6)}
    ${(negatives / denominator).toFixed(6)} 
    ${(zeroes / denominator).toFixed(6)}`
)
}

// NOTE: The instructions for this problem said to console.log the results as opposed to returning them.
