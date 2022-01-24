console.log("Meteorologia");

let temp;
let soma = 0;
let media = 0;
let cont = 0;

while(true){
    temp = parseInt(prompt("Digita o valor de Temperatura"));
    soma += temp; //Somando as Temperaturas.

    if(temp == 0){
        media = soma; //Recebendo as Somatorias de Temperaturas
        console.log(media / cont); // Calculando a Media e Exibindo.
        break; //Saindo do Laço.
    }
    cont++;
}