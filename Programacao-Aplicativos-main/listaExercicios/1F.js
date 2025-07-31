const prompt = require("prompt-sync")();

let Total = Number(prompt("Informe o valor total da conta: "));
let Clientes = Number(prompt("Informe a quantidade de clientes que efetuarão o pagamento: "));

let valorDividido = total / Clientes;

console.log(`O valor de R$${Total} dividido entre ${Clientes} pessoas foi de: R$${valorDividido.toFixed(2)}`);
