function logicalCalc(array, op){
    var hasil = {
        'AND': (x, y) => x && y,
        'OR': (x, y) =>  x || y,
        'XOR': (x, y) => x !== y
    }
    return array.reduce(hasil[op]);
}