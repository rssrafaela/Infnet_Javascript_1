function escrevaMeuNome(nome){
  return 'Meu nome é ' + nome; /* console.log() é uma função que imprime mensagens no console, enquanto return é uma instrução que retorna um valor de uma função. */
}

function verificarIdade(idade){
  if(idade >= 18){
    console.log(escrevaMeuNome('Rafaela') + ' é Maior');
  } else {
    console.log('Menor');
  }
}

verificarIdade(24);