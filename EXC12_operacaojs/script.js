// Função para executar a operação correspondente ao código recebido
function executarOperacao(codigo) {
  switch (codigo) {
      case 1:
          return operacao1();
      case 2:
          return operacao2();
      case 3:
          return operacao3();
      // Adicione mais cases conforme necessário para mais operações
      default:
          return "Operação inválida";
  }
}

// Exemplos de funções de operação
function operacao1() {
  return "Executando operação 1";
}

function operacao2() {
  return "Executando operação 2";
}

function operacao3() {
  return "Executando operação 3";
}

// Exemplo de uso:
let codigoOperacao = parseInt(prompt("Digite a opção válida 1 , 2 ou 3: ")); // Código da operação desejada
console.log(executarOperacao(codigoOperacao)); // Saída: Executando operação 2