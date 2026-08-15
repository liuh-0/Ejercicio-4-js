let palabra = prompt("Ingrese una palabra: ");
let palabrasimple = palabra.toLowerCase();
let palindromo = palabrasimple.split("").reverse().join("");
if (palabrasimple === palindromo) {
    alert("La palabra es un palíndromo.");
} else {
    alert("La palabra no es un palíndromo.");
}
