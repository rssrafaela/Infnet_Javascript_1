// Etapa 02 - Atividade 01 - Programação Web com JavaScript I

// Desenvolva uma solução em JavaScript que implemente a seguinte questão:

// Exiba o nome e o salário líquido do funcionário através de uma mensagem:
// 'O funcionario xxx recebe um salário líquido de R$yyy.'
// Regra de negocio:
// RN01 - O salário líquido do funcionário é calculado da seguinte forma:
// Salário Líquido = (Salário Bruto + Gratificação - Desconto) * 1.20 + (Ano atual - ano de contratação) * 150
// Exemplo: (1000 + 200 - 300) * 1.20 + (2024 - 2018) * 150 = 900 * 1.20 + 6 * 150 = 1080 + 900 = R$1980

// Especificações:

// Guarde os valores fixos em variáveis
// Faça o usuário digitar as informações necessárias
// Exiba a mensagem tanto no console quanto no browser

let nome = prompt('Informe o seu nome: ');
let salarioBruto = parseFloat(prompt('Informe o seu salário bruto: '));
let gratificacao = parseFloat(prompt('Informe a sua gratificação: '));
let desconto = parseFloat(prompt('Informe o seu desconto: '));
let anoDeContratacao = parseInt(prompt('Informe o seu ano de contratação: '));

const anoAtual = new Date().getFullYear();
const indice = 1.20;
const taxaAdministrativa = 150;

let salarioLiquido = (salarioBruto + gratificacao - desconto) * indice + (anoAtual - anoDeContratacao) * taxaAdministrativa;

let mensagem = 'O(a) funcionário(a) ' + nome + ' recebe um salário líquido de R$ ' + salarioLiquido.toFixed(2);
console.log(mensagem);
alert(mensagem);