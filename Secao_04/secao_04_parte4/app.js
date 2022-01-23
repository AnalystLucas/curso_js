/* Switch */

/* Verificando cargos e salarios

Programador Jr
Programador Pl
Programador Sr
Tester
Arquiteto Software
Analista Sistema
Gerente

*/

let cargo = "Programador Jr";

switch(cargo){
    case "Programador Jr":
        console.log("O Programador Jr recebe R$ 4.000,00");
        break;
    case "Programador Pl":
        console.log("O Programador Pl recebe R$ 5.000,00");
        break;
    case "Programador Sr":
        console.log("O Programador Jr recebe R$ 6.000,00");
        break;
    case "Tester":
        console.log("O Tester recebe R$ 4.000,00");
        break;
    case "Arquiteto Software":
        console.log("O Arquiteto de Software recebe R$ 8.000,00");
        break;
    case "Analista Sistema":
        console.log("O Analista Sitema recebe R$ 7.000,00");
        break;
    case "Gerete":
        console.log("O Gerente recebe R$ 9.000,00");
        break;
    default:
        console.log("Não encontrado o Cargo informado !");
}
