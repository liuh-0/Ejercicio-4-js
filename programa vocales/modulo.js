let cualquierpalabra = prompt("Escribe cualquier palabra: ");
let vocales = ["a", "e", "i", "o", "u"];
let contador = 0;
let cantidaddepalabras = cualquierpalabra.split(" ");
let listadepalabras = cantidaddepalabras.length; 
let cantidadcaracteres = cualquierpalabra.length;

for (let i = 0; i < cualquierpalabra.length ; i++){
    if (vocales.includes(cualquierpalabra[i].toLowerCase())){
        contador++;
      }
  }
  alert(`La palabra "${cualquierpalabra}" tiene ${contador} vocales.
  - Caracteres totales: ${cantidadcaracteres}
  - Cantidad de palabras: ${listadepalabras}
  - Cantidad de vocales: ${contador}`);