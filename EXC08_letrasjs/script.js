/* Verificação de Letra: 
escreva um programa em javaScript que verifica se uma letra digitada pelo usuário é uma vogal ou uma consoante. */

let letra = prompt("Informe uma letra: ").toLowerCase();

if(letra.lenght == 1){

  if(letra >= "a" && letra <= "z"){ 
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra =="u"){
      alert("vogal");
    } else {
      alert("consoante");
    }
  } else {
    alert("não é uma letra");
  }
} else {
  alert("Por favor, digite uma única letra!");
}

