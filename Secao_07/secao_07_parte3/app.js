//Array Interações.

const frutas = [];

frutas[0] = "Abacaxi"; 
frutas[1] = "Laranja"; 
frutas[2] = "Maça"; 
frutas[3] = "Limao";

console.log(frutas);

frutas[2] = "Uva"; // Alterando o Indice 2 de Maça para Uva
console.log(frutas);

//Metodos dos Arrays.

//Push
frutas.push("Melancia"); //Adiciona Sempre ao Final do array
console.log("Metodo push: " + frutas);

//Unshift
frutas.unshift("Caja"); //Adiciona sempre ao Inicio do Array.
console.log("Metodo unshift: " + frutas);

//Pop
frutas.pop() //Remove o Sempre o Ultimo Elementos do Array.
console.log("Metodo pop: " + frutas);

//shift
frutas.shift(); // Remove sempre o Primeiro Elementos do Array.
console.log("Metodo shift: " + frutas);

//Splice
frutas.splice(3,1) // Removendo entre intervalos dentros dos indices do array sendo 3 o indice que vai iniciar e o 1 quantos elementos serão removidos apartir do indice 3
console.log("Metodo splice: " + frutas);

//sort
frutas.sort();  //Ordenando em ondem crescente
console.log("Metodo sort: " + frutas);

//reverse
frutas.reverse();  //Revertendo o array, caso for usado depois do sort fica em onde descrecente.
console.log("Metodo reserver: " + frutas);