let fibonacci = [1, 2]
let last = fibonacci[fibonacci.length - 1]
while(last < 4000000){
 last = fibonacci[fibonacci.length - 1]
 let next = fibonacci[fibonacci.length - 2]
 fibonacci.push(last + next)
}
let even = fibonacci
.filter(num => num % 2 === 0)
.reduce((a, b) => a + b)
console.log(even)
