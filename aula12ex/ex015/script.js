  function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERROR] Verifique os dados e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("scr","mcrianca.png")
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "madolescente.png")
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "madulto.png")
      } else {
        //idoso
        img.setAttribute("src", "mvelho.png")
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "fcrianca.png")
      } else if (idade >= 10 && idade < 21) {
        ///jovem
        img.setAttribute("src", "fadolescente.png")
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "fmulher.png")
      } else {
        //idoso
        img.setAttribute("src", "fidosa.png")
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img)
  }
}
