// Diagrama de flujo
// representa la esquematizacion grafica de un algoritmo, el cual muestra graficamente
// los pasos o procesos para alcanzar la solucion de un problema.
// Su correcta construccion es sumamente importante porque, a partir del muismo se escribe
// un programa en cualquier lenguaje.

// Escribe un programa que determine si alguien puede votar. (18 años)
// El programa debe pedir la edad al usuario y luego imprimir si puede votar o no.


// const age = Number(prompt("Digita tu edad"));

// if(age >= 18){
//     document.write("Puedes Votar")
// } else {
//     document.write("No Puedes Votar")
// }

// document.write("Fin del programa")


// Que sume los primeros `n` numeros naturales
// Iniciar una variable suma = 0
// Iniciar una variable `i` = 1
// Mientras `i` sea menor o igual a `n`, va a generarse las respectativas iteraciones

// const n = 15; // 15! =  1+2+3+4+5+6+7+8+9+10+11+12+13+14+15 = 120
// let suma = 0;
// let i = 1;

// while(i <= n){
//     suma = suma + i;
//     i = i + 1;
// }
// console.log(suma);

// A partir de la sucesion de fibonacci, vamos a sumar los primeros 15 numeros

const limit = 50
let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);

let s = n1 + n2; // 0 + 1 = 1
while(s < limit){ // 2 < 15 = true
    console.log(s); // 2
    n1 = n2 // n1 = 1
    n2 = s; // n2 = 1
    s = n1 + n2 // s = 1 + 1 = 2
}



