const prompt = require("prompt-sync")();

let n1 = Number(prompt("Informe a primeira nota do aluno: "));
let n2 = Number(prompt("Informe a segunda nota do aluno: "));
let n3 = Number(prompt("Informe a terceiran nota do aluno: "));

let mediaAluno = (n1 + n2 + n3) / 3;
let mediaEscola = 7;

if(mediaAluno >= mediaEscola){
    console.log(`Aprovado! (${media}>=${mediaEscola}`)
}else{
    console.log(`Reprovado (${mediaAluno}<${mediaEscola})`)
}
