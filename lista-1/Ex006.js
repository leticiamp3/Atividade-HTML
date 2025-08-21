import input from 'readline-sync';

let n1 = input.questionInt("Digite o primeiro número:")
let n2 = input.questionInt("Digite o segundo número:")

let resp1 = n1 - 3;
let resp2 = n2 + 2;

let resultadoFinal = (resp1 = resp2) -1;

console.log("Resultado final é", resultadoFinal)
