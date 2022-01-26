//Escopo de Função

// let nome = "Lucas"; // Variavel Global !

// function sauda(){
//     //Escopo da Função
//     let saudacao = "Olá Sr(a). " + nome; // Variavel Local !
//     return saudacao;
// }

// console.log(sauda());

//Paramentros de uma função

let nome;
let snome;
let numAnos;
let ehBomPagador;
let valorEmprestimo;

function cadastrarCliente(nomecli, snomecli, valorEmprestimocli, numAnoscli = 2, ehBomPagadorcli = false ){
    nome  = nomecli;
    snome = snomecli;
    numAnos = numAnoscli;
    ehBomPagador = ehBomPagadorcli;
    valorEmprestimo =  valorEmprestimocli;
}

cadastrarCliente("Lucas", "Moreira", 15000);
console.log(nome);
console.log(snome);
console.log(numAnos);
console.log(ehBomPagador);