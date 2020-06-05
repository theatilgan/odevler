/**
 * @param {number} x
 * @return {boolean}
 */

var palindromemu= function(x) {
    return x == String(x).split('').reverse().join('')
};

// x değerini stringe çevirip tek tek ayırırız ters çeviririz ve birleştiririz.
