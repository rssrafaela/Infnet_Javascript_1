/*
Verificação de Triângulo: 
escreva um programa em javaScript que solicita os comprimentos dos lados de um triângulo e 
verifica se é equilátero, isósceles ou escaleno.

Um triângulo é chamado de equilátero se todos os lados possuem a mesma medida. 
Um triângulo é chamado de isósceles se dois lados possuem a mesma medida. 
Um triângulo é chamado de escaleno se todos os lados possuem medidas diferentes.
*/

//tabela verdade
// && - and
// || - or
// ! - not

//A
//B
//A && B
//V && V = V
//V && F = F
//F && V = F
//F && F = F

//A || B
//V || V = V 
//V || F = V
//F || V = V 
//F || F = F 

let lado1 = 10;
let lado2 = 9;
let lado3 = 8;

/*
if(lado1 == lado2 && lado2 == lado3){
  alert("equilátero");
} else {
  if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    alert("isósceles");
  } else {
    alert("escaleno");
  }
}
*/

if(lado1 == lado2 && lado2 == lado3){
  alert("equilátero");
} else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
  alert("isósceles");
} else {
  alert("escaleno");
}


alert("Fim do algoritmo");