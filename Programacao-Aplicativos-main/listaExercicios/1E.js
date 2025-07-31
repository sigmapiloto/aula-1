const prompt = require("prompt-sync")();

let distancia = Number(prompt("Informe a distância da viagem: "));
let consumoMedio = Number(prompt("Informe o consumo médio do carro (em km/l): "));
let Gasolina = Number(prompt("Informe o preço da gasolina: "));

let litros = distancia / consumoMedio;
let custo = litros * Gasolina;

console.log(`A quantidade de litros necessários para completar a viagem de ${distancia}km é de: ${litros.toFixed(2)}`);
console.log(`A viagem vai custar: ${custo.toFixed(2)}`);
