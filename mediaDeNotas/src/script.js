/* Faça uma algoritimo que dado as 3 notas tiradas por um aluno em um semestre na faculdade
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo 

Classificação:

- Média menor que 5, reprovaçaõ;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
  console.log('Reprovação');
} else if (media >= 5 && media <= 7) {
  console.log('Recuperação');
} else {
  console.log('Passou de semestre');
}
  