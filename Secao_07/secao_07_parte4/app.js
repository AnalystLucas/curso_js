//Array no Sistema do banco.

let nome;
let snome;
let idade;
let valorEmprestimo;
let numAnos;
let taxaDeJuros;
let ehBomPagador;
let avalistas;


function cadastrarCliente(nomeCliente, snomeCliente, idadeCliente, valorEmprestimoCliente,
    numAnosCliente, ehBomPagadorCliente, avalistaCliente){
    nome = nomeCliente;
    snome = snomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    ehBomPagador = ehBomPagadorCliente;

    taxaDeJuros = defineTaxa(idade);

    avalistas = avalistaCliente;

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

cadastrarCliente("Lucas", "Moreira", 26, 150000, 2, true, ["Karen","Virginia", "Douglas"]);

// console.log(nome);
// console.log(avalista);
// console.log(avalista[0]);
// console.log(avalista[1]);
// console.log(avalista[2]);

function adicionaAvalista(avalista){
    avalistas.push(avalista);
}

function removeAvalista(){
    avalistas.pop();
}

function editarAvalista(nome, indice){
    avalistas[indice] = nome;
}

function ordenarAvalista(){
    return avalistas.sort();
}

//adiciona avalistas
adicionaAvalista("moreira");
adicionaAvalista("palma");
adicionaAvalista("laisa");
console.log(avalistas);

//remove avalistas
removeAvalista();
removeAvalista();
console.log(avalistas);

//edita avalista
editarAvalista("Karen Thauane", 0);
console.log(avalistas[0]);

//ordena o array
console.log(ordenarAvalista());
