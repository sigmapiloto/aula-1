const prompt = require("prompt-sync")();

let n = Number(prompt("Informe um número: "));

if(numero % 3 == 0){
    console.log(`O número ${n} e múltiplo de 3`);
}else{
    console.log(`O número ${n} não e múltiplo de 3`);
}
