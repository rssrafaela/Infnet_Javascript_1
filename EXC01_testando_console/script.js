anoAtual = new Date().getFullYear();
anoNascimento = prompt('Informe o seu ano de nascimento: ');
idade = anoAtual - anoNascimento;
nome = prompt('Informe o seu nome: ');
mensagem = 'Sou ' + nome + ' e tenho ' + idade + ' anos';
console.log(mensagem);
alert(mensagem);