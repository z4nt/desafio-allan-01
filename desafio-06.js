//
// 5. Crie uma função que receba um array de numeros e retorne um array contendo apenas os números multiplicados por 5 e retorna apenas os que forem pares.
//
var array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicaPor5EapenasPares(param) {
    var toReturn = param.map(item => item * 5).filter(item => item%2 == 0)

  return toReturn;
}
console.log(multiplicaPor5EapenasPares(array4));