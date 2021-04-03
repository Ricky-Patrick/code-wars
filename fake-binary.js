function fakeBin(x){
    let arr = x.split('')
    let bin = [];
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] < 5 ? bin.push('0') : bin.push('')
    }


    return bin.join('')
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 