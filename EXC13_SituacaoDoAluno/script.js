let nomeAluno = prompt("Informe o nome do aluno: ");
let nomeDisciplina = prompt("Informe o nome da disciplina: ");
let qtdeProva = parseInt(prompt("Informa a quantidade de provas: "));

let notas = [];
for(let i = 0; i < qtdeProva; i++){
  let nota = parseFloat(prompt("Informa o valor da nota: "));
  
  notas.push(nota);
}

let media = 0;
let soma = 0;
for(let i = 0; i < notas.length; i++){
  soma = soma + notas[i];
}
media = soma / notas.length;

alert(nomeAluno + " - " + nomeDisciplina + " - " + media);