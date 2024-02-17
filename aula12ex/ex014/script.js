function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  //let hora = data.getHours();
  let hora = 1;
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "dia.png";
    document.body.style.background = "#f8f1ee";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = "tarde.png";
    document.body.style.background = "#955e64";
  } else {
    //BOA NOITE
    img.src = "noite.png";
    document.body.style.background = "#131a24";
  }
}
