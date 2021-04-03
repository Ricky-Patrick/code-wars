function digitize(n) {
    //code here
    let q= String(n).split('').map(Number).reverse();
    console.log(q)
}
console.log((digitize(35231),[1,3,2,5,3]))
