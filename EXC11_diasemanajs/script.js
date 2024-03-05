/*
Verificação de Dia da Semana 
Escreva um programa que recebe um número de 1 a 7 e imprime o nome do dia da semana correspondente.
*/

let diaSemana = 1;

if(diaSemana == 1 || diaSemana == 3 || diaSemana == 5){
    alert ("rn.1");
} else if(diaSemana == 2){
    alert("rn.2");
} else if(diaSemana == 4 || diaSemana == 6 || diaSemana == 7){
    alert("rn.3");
}

switch(diaSemana){
    case 1:
    case 7:
        alert("Final de semana");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert("Dia de semana");
        break;
    default:
        alert("Default");
}

alert("Finalizando...");