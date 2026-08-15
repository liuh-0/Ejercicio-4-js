 function ppt() {
  let entrada = prompt("Ingrese piedra, papel o tijera");
  function validarentrada() {
    while (
      entrada !== "piedra" &&
      entrada !== "papel" &&
      entrada !== "tijera"
    ) {
      entrada = prompt("Entrada inválida. Ingrese piedra, papel o tijera");
    }
    return entrada;
  }
  let jugador1 = validarentrada();
  const opciones = ["piedra", "papel", "tijera"];
  let jugador2 = opciones[Math.floor(Math.random() * opciones.length)];
   if (
    (jugador1 === "piedra" && jugador2 === "tijera") ||
    (jugador1 === "papel" && jugador2 === "piedra") ||
    (jugador1 === "tijera" && jugador2 === "papel")
  ) {
    return "El jugador 1 gano";
  } else if (
    (jugador2 === "piedra" && jugador1 === "tijera") ||
    (jugador2 === "papel" && jugador1 === "piedra") ||
    (jugador2 === "tijera" && jugador1 === "papel")
  ) {
    return "El jugador 2 gano";
  } else if (jugador1 === jugador2) {
  return "Empate";
  }
}

let historial = [];
let limite = 5;
let seguirjugando = true;

while (seguirjugando) {

let resultado = "Resultado de la partida: " + ppt();
alert(resultado);

historial.unshift(resultado);
if (historial.length > limite) {
  historial.pop();
  }

  seguirjugando = confirm("¿Desea jugar otra partida?");
}

console.log("Historial de partidas jugadas:", historial);