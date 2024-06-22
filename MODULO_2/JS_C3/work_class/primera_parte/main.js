// En el navegador
// document.write("Hola mundo");
// prompt("Hola como estas");


// Var VS Const 
const nombre = "kambcode";
const peso = 70;
const altura = 174;
const alturaM = altura / 100
const imc = peso / (alturaM * alturaM)

// console.log(nombre);
// document.write("El imc es: ", imc.toFixed(2));

// variable (var)
// Es la forma de almacenar un dato para modificarlo, utilizarlo o presentarlo (reescribirlas o renombrarlas)

// constantes (const)
// const se usan para declarar constantes, una constante es una variable que no puede cambiar su valor

// var nombreCompleto = "Jorge Rodriguez";
// nombreCompleto = "Andres Pizarro"; // error de reescribir en una constante
// document.write(nombreCompleto);

// Una variable consume más recursos que una constante

// EJERCICIO  if / else
// Escribe un programa que pida a él usuario ingresar un numero y luego determine si es positivo o negativo

// const numero = Number(prompt("Digita un numero"));

// if(numero >= 0){
//     document.write("Tu numero es positivo")
// } else {
//     document.write("Tu numero es negativo")
// }

// Hacer un programa que le diga a él usuario si un numero es par o impar, pedirle el numero a él usuario
const numero2 = Number(prompt("Digita un numero")); // 7

if(numero2 % 2 === 0){ 
    document.write("tu numero es impar")
} else {
    document.write("tu numero es impar")
}


