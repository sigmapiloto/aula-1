const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if(numero % 2 == 0){
    console.log(`O número ${numero} é par!`)
}else{
    console.log(`O número ${numero} é ímpar!)`)
}