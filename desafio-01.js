//
// 1. Dado um array de números inteiros, crie uma função que retorne um novo array contendo apenas os números pares. Utilize o método filter.
//
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pares(param) {
    
    var toReturn = param.filter(item => {
        if (item % 2 === 0) {
            return item
        }
    })
    return toReturn;
}
console.log(pares(array1));