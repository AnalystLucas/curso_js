//Investigação criminal

//Fazer 5 perguntas.

//1 º Telefonou para a Vitima?
//2 º Esteve no Local do Crime?
//3 º Mora perto da Vitima?
//4 º Devia para a Vitima?
//5 º Ja trabalhou com a Vitima?

//Tabela de Classificação
//5 resposta afirmativa = Assassino
//3 a 4 resposta afirmativa = cumplice
//2 resposta afirmativa = suspeito
//0 a 1 resposta afirmativa = Inocente


//Utilizando funções crie um sistema para realizar as perguntas e classificar conforme a tabela

let nome;
let idade;
let cont;
let perguntas = [];

function suspeitoCrime(nomesus, idadesus){
    nome = nomesus;
    idade = idadesus;
};
function Questionario(){
 perguntas = {
        '1': "Telefonou para a Vitima?",
        '2': "Esteve no Local do Crime?",
        '3': "Mora perto da Vitima?",
        '4': "Devia para a Vitima?",
        '5': "Ja trabalhou com a Vitima?" 
    }
    return perguntas;   
};
function realizarQuestionario(){
    let contper = 0;
    perguntas = Questionario();
    for(let i = 1; i <= 5; i++){
        let confirmaper = confirm(perguntas[i]);
        if (confirmaper == true){
            contper++
        }
    }
    cont = contper;
}

function classificarQuestionario(){
    if(cont == 5){
        return "Assassino !!";
    }else if(cont >=3 && cont <= 4){
        return "Cumplice !";
    }else if(cont == 2){
        return "Suspeito";
    }else if(cont >=0 && cont <= 1){
        return "Inocente";
    }else{
        return "Não foi possivel classificar";
    }
}

function Investigacao(){
    
    suspeitoCrime("Lucas", 26);
    realizarQuestionario();
    let classificar = classificarQuestionario();
    console.log("Investigado: " + nome + " Idade: " + idade + " Você é: " + classificar)
}

Investigacao();
