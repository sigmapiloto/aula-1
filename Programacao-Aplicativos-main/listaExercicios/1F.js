const prompt = require("prompt-sync")();

let total = Number(prompt("Informe o valor total da conta: "));
let clientes = Number(prompt("Informe a quantidade de clientes que efetuarão o pagamento: "));

let valorDividido = total / clientes;

console.log(`O valor de R$${total} dividido entre ${clientes} pessoas foi de: R$${valorDividido.toFixed(2)}`);
