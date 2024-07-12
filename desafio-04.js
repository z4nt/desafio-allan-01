//
// 4. Crie uma função que receba um array de alunos e retorne o apenas os alunos aprovados (nota maior ou igual a 7)
//
var alunos = [
    {
      nome: "Aluno 1",
      nota: 10,
    },
    {
      nome: "Aluno 2",
      nota: 6,
    },
    {
      nome: "Aluno 3",
      nota: 7,
    },
  ];
  
  function alunosAprovados(param) {
    var toReturn = param.filter(({nota}) =>  nota >= 7)

    return toReturn;
  }
  console.log(alunosAprovados(alunos));