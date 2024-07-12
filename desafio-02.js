//
// 2. Crie uma função que receba um array de números e retorne o maior número presente no array
//
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maiorNumero(param) {
    var check = 0
    for (let index = 0; index < param.length; index++) {
        
        if ( param[index] > check){
            check = param[index]
        }
    
    }
  var toReturn = param.find(item =>item === check)
  
  return toReturn;
}
console.log(maiorNumero(array2));