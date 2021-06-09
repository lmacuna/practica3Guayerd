// Recordar!! variables sin acentos ni Ñ ni caracteres raros ☻ | Notacion camello si.
//EJERCICIO Nº1

let texto = prompt("ingrese un texto a verificar");
console.log(texto.includes("a"));



//EJERCICIO Nº2
let texto = prompt("ingrese unas palabras");
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());



//EJERCICIO Nº3
let palabra = prompt("ingre una palabras");
console.log(palabra.charAt(0));



//EJERCICIO Nº4
let frase = prompt("ingrese una frase");
console.log("cantidad de caracteres en la frase: " + frase.length + "\n " + frase.toUpperCase());



//EJERCICIO Nº5 ¿ que pasa cuando por error se ingresa un espacio entre dígitos ?
let numero = parseInt(prompt("ingrese un numero de 6 digitos para abajo"));
let num = numero.toString();
console.log(num.length + "\nFue convertido a string para medir su longitud\n" + num);



//EJERCICIO Nº6 Investigamos en google a la propiedad .charAt le pasamos el length - 1
let palabra = prompt("ingrese una palabra");
console.log("la ultima letra es: " + (palabra.charAt(palabra.length - 1)).toUpperCase() + "\n" + palabra.toUpperCase());



//EJERCICIO Nº7 cuando utilice el metodo "replace" solo me reemplazaba la 1er coincidencia o no supe hacerlo(seguro jaja) y busque en youtube...y añadi esto que no entiendo "/\s/g"
let oracion = prompt("ingresa una oracion");
console.log(oracion.replace(/\s/g, "*"));



//EJERCICIO Nº8
let letra = prompt("ingrese una letra");
let palabra = prompt("ingrese una palabra");
palabra = palabra.includes(letra);
if (palabra == false) {
    console.log("la palabra no contiene la letra");
} else {
    console.log("la palabra contiene la letra");
}



//EJERCICIO Nº9
let palabra = prompt("ingrese una palabra");
console.log(palabra.slice(1, palabra.length));



//EJERCICIO Nº10
let palabra = prompt("ingrese una palabra");
console.log(palabra.replace(palabra.charAt(0), palabra.charAt(0).toUpperCase()));