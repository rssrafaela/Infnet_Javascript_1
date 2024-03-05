/* 
Combinação de Operadores Lógicos:
Escreva um programa que verifica se uma pessoa pode entrar em um parque de diversões
com base na idade e na altura (12 anos com 1.3 metros tá liberado).
 */

const IDADE_MINIMA = 10;
const ALTURA_MINIMA = 1.3;

let idade = parseInt(prompt("Informe a sua idade: "));

alert("Sua idade é: " + idade);

let altura = parseFloat(prompt("Informe a sua altura: "));

alert("Sua altura é: " + altura);

// condição 1
if(idade >= IDADE_MINIMA && altura >= ALTURA_MINIMA){
    alert ("A criança está liberada!!!");
} else {
    alert ("Nada disso... tá barrada!!!");
}



