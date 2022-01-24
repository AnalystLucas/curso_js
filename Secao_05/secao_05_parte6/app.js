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


    
while (true){
    valorEmprestimo = parseInt(prompt("Valor do Emprestimo"));
    if(valorEmprestimo === 0){
        break;
    }
    numAnos = parseInt(prompt("Digite em quantos Anos de Duração do Emprestimo"));
    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = juros + valorEmprestimo;
    console.log(montante);
}

