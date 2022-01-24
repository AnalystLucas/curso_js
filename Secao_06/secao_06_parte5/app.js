//Escopo de Função

let nome = "Lucas"; // Variavel Global !

function sauda(){
    //Escopo da Função
    let saudacao = "Olá Sr(a). " + nome; // Variavel Local !
    return saudacao;
}

console.log(sauda());