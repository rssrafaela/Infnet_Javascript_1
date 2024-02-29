/* Este arquivo não é executável, pois contém exemplos de diferentes formas de expressar condições em JavaScript, utilizando estruturas condicionais como if-else, operador ternário, e condicionais encadeadas. */

let salario = 700; //rica ( salario >= 1000), pobre (salario < 500), classe média (salario >=500 && < 1000)

let idade = 80; // Se a idade  for maior que 70 anos, tá velhinho; caso contrário, novinho.

// Operadores: > >= <= == != === !==

// Forma 1 

if(salario >= 1000){
  alert("rica");
} else {
  if (salario < 500){
    alert("pobre");
  } else {
    alert("classe media");
  }
  
}

//Casos de teste:
// 100
// 1200
// 700
// 500
// 1000
// 0

// Forma 2

if(salario >= 1000){
  alert("rica");
} else if (salario < 500){
    alert("pobre");
  } else {
    alert("classe media");
  }

// Forma 3

if(idade > 70){
  alert("velhinho");
} else {
  alert("novinho");
}

alert("rica/pobre/classe media - velhinho/novinho");

// Forma 4


let salario = 700; 
let idade = 80;

let oStatus = "meu status";

if(salario >= 1000){
  oStatus = "rica";
} else if (salario < 500){
    oStatus = "pobre";
  } else {
    oStatus = "classe media";
  }

let aSituacao = "minha situacao";

if(idade > 70){
  aSituacao = "velhinha";
} else {
  aSituacao = "novinha";
}

alert(oStatus + " - " + aSituacao);

// Forma 5 

let salario = 700; 
let idade = 80;

let oStatus = "classe media";

if(salario >= 1000){
  oStatus = "rica";
} else if (salario < 500){ 
    oStatus = "pobre";
  } 

let aSituacao = "novinha";
if(idade > 70){
  aSituacao = "velhinha";
}

alert(oStatus + " - " + aSituacao);

// Forma 6 - Operador Ternário

let oStatus = salario >= 1000 ? "rica" : (salario < 500 ? "pobre" : "classe media");
let aSituacao = idade > 70 ? "velhinha" : "novinha";

// No excell seria =SE(condicao, verdadeiro, SE(condicao, verdadeiro, falso));