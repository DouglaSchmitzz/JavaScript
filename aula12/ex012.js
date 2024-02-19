let agora = new Date();
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas`);
if (hora > 6 && hora <= 11) {
  console.log(`Bom dia!`);
} else if (hora >= 12 && hora <= 17) {
  console.log(`Boa tarde!`);
} else if (hora >= 18 && hora <= 24) {
  console.log(`Boa noite!`);
} else if (hora >= 1 && hora <= 6) {
  console.log(`Boa madrugada!`);
}
