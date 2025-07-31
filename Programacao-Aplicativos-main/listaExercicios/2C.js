const prompt = require("prompt-sync")();

let n = Number(prompt("Informe a idade da pessoa: "));

if(n <= 12){
    console.log(`É uma criança (ou um bebê)`);
}
else if(n <= 17){
    console.log(`É um adolescente`);
}
else if(n <= 64){
    console.log(`É um adulto`);
}
else if(n > 64){
    console.log(`É um idoso`);
}
