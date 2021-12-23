/*
Calculando juros Emprestimo

Montante = Juros + ValorEmprestimo
Juros = ValorEmprestimo * txjuros * anos
*/

let nome = "Lucas";
let sobreNome = "Moreira" ;
let idade = 26;
const numCliente = 095864;

let valorEmprestimo = 150000;
let txjuros = 0.10;
let anos = 6;

let juros = valorEmprestimo * txjuros * anos;
let montante = juros + valorEmprestimo;

console.log(montante);

