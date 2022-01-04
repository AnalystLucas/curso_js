/* 
Criar um sistema para avaliar tempo entre os corredores.

3 corredor, menor tempo de prova e indicar o vencedor, tempo é recebido em segundo.

*/

let t_corredor1 = 70;  // 1m e 10s
let t_corredor2 = 75;  // 1m e 15s
let t_corredor3 = 65;  // 1m e 5s

if(t_corredor1 < t_corredor2 && t_corredor1 < t_corredor3){
    console.log("Corredor 1 é o vencedor");
}else if(t_corredor2 < t_corredor1 && t_corredor2 < t_corredor3){
    console.log("Corredor 2 é o vencedor");
}else{
    console.log("Corredor 3 é o vencedor")
}

 
