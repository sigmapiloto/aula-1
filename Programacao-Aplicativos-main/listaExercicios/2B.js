const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número aleatorio: "));

if(n % 2 == 0){
    console.log(`O número ${n} é par!`)
}else{
    console.log(`O número ${n} é ímpar!)`)
}
