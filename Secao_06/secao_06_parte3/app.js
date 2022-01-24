// Funções Aplicado no sistema de Banco.

let nome;
let snome;
let idade;
let valorEmprestimo;
let numAnos;
let taxaDeJuros;
let ehBomPagador;


function cadastrarCliente(nomeCliente, snomeCliente, idadeCliente, valorEmprestimoCliente,
    numAnosCliente, ehBomPagadorCliente)

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <=25){
        return 0.09;
    }else if(idade >= 26 && idade <=35){
        return 0.08;
    }else if(idade >= 36 && idade <=50){
        return 0.07;
    }else{
        return 0.06;
    }
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

