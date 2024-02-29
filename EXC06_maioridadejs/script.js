/*
Verificação de Maioridade: 
escreva um programa em javaScript que solicite a idade do usuário e verifica se ele é maior de idade (idade igual ou superior a 18 anos).
*/

//entrada
let idade = Number(prompt("Informe a sua idade: "));
let msg = "O funcionário é menor de idade: " + idade;

//processamento
if(idade >= 18){
  msg = "O funcionário é maior de idade: " + idade;
}

//saída
alert(msg);