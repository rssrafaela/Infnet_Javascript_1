/* Prioridade dos Operadores Lógicos: 
Escrevam um programa que verifica se um número é positivo e par.
 */

// entrada: um número

let numero = 10;

// condição: o número deve ser positivo (>= 0) e par (resto 0)

if(numero >= 0 && numero % 2 == 0){
    alert("O número " + numero + " é positivo e par");
} else {
    alert("Condição falsa");
}

