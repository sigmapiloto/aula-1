const prompt = require("prompt-sync")();

let numeros = new Array(5);

numeros[0] = Number(prompt("Digite o numero1: "));
numeros[1] = Number(prompt("Digite o n2: "));
numeros[2] = Number(prompt("Digite o n3: "));
numeros[3] = Number(prompt("Digite o n4: "));
numeros[4] = Number(prompt("Digite o n5: "));

let maiornumero = numeros[0];

for(let i = 1; i < 5; i++){
    if(numeros[i] > maiornumero){
        maiornumero = numeros[i];
    }
}

console.log(`O maior número é: `,maiorNumero)


