const prompt = require("prompt-sync")();

let soma = 0;

for(let i = 11; i <= 30; i += 2){
    soma += i;
}

console.log(`A soma de todos os numeros ímpares maiores que 10 e menores que 30 é de: `, soma);
