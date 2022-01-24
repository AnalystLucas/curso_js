// Funções Aplicado no sistema de Banco.

let nome;
let snome;
let idade;
let valorEmprestimo;
let numAnos;
let taxaDeJuros;
let ehBomPagador;


function cadastrarCliente(nomeCliente, snomeCliente, idadeCliente, valorEmprestimoCliente,
    numAnosCliente, ehBomPagadorCliente){
    nome = nomeCliente;
    snome = snomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    ehBomPagador = ehBomPagadorCliente;

    taxaDeJuros = defineTaxa(idade);

}

function defineTaxa(idade){
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

cadastrarCliente("Lucas","Moreira", 24, 150000, 4, true);
console.log(nome);
console.log(idade);
console.log(taxaDeJuros);

cadastrarCliente("Lucas","Santos", 37, 150000, 4, true);
console.log(nome);
console.log(idade);
console.log(taxaDeJuros);

