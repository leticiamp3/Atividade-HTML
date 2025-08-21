import input from 'readline-sync';

let n1 = input.questionInt("Digite n1:")
let n2 = input.questionInt("Digite n2:")
let n3 = input.questionInt("Digite n3:")

let resp1 = n1 + 10
let resp2 = n2 - 5
let resp3 = n3 * 2

console.log("resultados: ", resp1, "," +, resp2 +"," + resp3);
