function utopianTree(n) {
    // Write your code here
let height = 1;
for(let i = 1; i <= n; i++) {
    if(i % 2 !== 0){
    height *= 2
}else height++
}
return height
}
