// WHILE !!

// let soma = 0;
// let numero;

// while ( soma < 100){
//     numero = parseInt(prompt("Insira um numero"));
//     soma += numero;
//     console.log(soma);
// }

//Implementação

let valorEmprestimo;
let idade = 24;
let taxaDeJuros;
let numAnos;
let juros;
let montante;

if(idade >= 18 && idade <=25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade <=35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade <=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

// juros = valorEmprestimo * taxaDeJuros * numAnos;
// montante = juros + valorEmprestimo;

do{
    valorEmprestimo = parseInt(prompt("Valor do Emprestimo"));
    numAnos = parseInt(prompt("Digite em quantos Anos de Duração do Emprestimo"));
    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = juros + valorEmprestimo;
    console.log(montante);
}while (valorEmprestimo != 0)