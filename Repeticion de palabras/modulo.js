let frase = prompt("Ingrese una frase: ");
let palabras = frase.toLowerCase().split(" ");
let contador = {};

for (let palabra of palabras) {
  if (contador[palabra]) {
    contador[palabra]++;
  } else {
    contador[palabra] = 1;
  }
}
console.log("contador:", contador);