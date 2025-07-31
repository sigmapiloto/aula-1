const prompt = require("prompt-sync")();

let n1 = prompt("Informe o valor do primeiro número: ");
let n2 = prompt("Informe o valor do segundo número: ");

console.log(`O valor da soma do número1 (${n1}) e do número2 (${n2}) é igual a ${Number(n1)+Number(n2)}`);
