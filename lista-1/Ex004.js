import input from 'readline-sync';

let n1 = input.questionint("digite um número: ");

let resposta1 = n1 + 10

let n2 = input.questionint("Digite o número 2: ");

let resposta2 = n2/2

console.log(´
---correção dos exercícios---
${n1} + 10 = ${resposta1}
${n2} /2= ${resposta2}
----------------------------------
´);
