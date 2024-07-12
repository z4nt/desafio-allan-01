//
// 3. Crie uma função que receba um array de pessoas e retorne o primeiro objeto com idade maior ou igual a 40
//
var pessoas = [
    {
      nome: "joao",
      idade: 20,
    },
    {
      nome: "joao",
      idade: 30,
    },
    {
      nome: "joao",
      idade: 40,
    },
  ];
  
  function maiorIdade(param) {
    var toReturn = param.find(({idade}) => idade >= 40)
    return toReturn
  }
  console.log(maiorIdade(pessoas));