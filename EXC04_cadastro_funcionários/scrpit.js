function definir(){

  let valorSigno = Number(document.getElementById('signo').value);
  let valorTime = Number(document.getElementById('timeFutebol').value);
  let valorEscolaridade = Number(document.querySelector('input[name="escola"]:checked').value);
  let qteSoftskill = Number(document.querySelectorAll('input[id^="softskill"]:checked').length);


  let valorSoftskill = qteSoftskill*10;
  let resultado = valorSigno + valorTime + valorSoftskill + valorEscolaridade;

  document.getElementById("resultado").value = resultado;
}



