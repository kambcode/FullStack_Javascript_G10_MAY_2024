// La librearia de matematicas de javascript Math

// 1. Generar numeros aleatorios
// Math.random() -> Genera un numero aleatorio entre 0 y 1
// console.log("Numero aleatorio entre 0 y 1", Math.random());

// Math.random() * 10 -> Genera un numero aleatorio entre 0 y 10
// console.log("Numero aleatorio entre 0 y 10", Math.random() * 10);

// Math.random() * 100 -> Genera un numero aleatorio entre 0 y 100
// console.log("Numero aleatorio entre 0 y 10", Math.random() * 100);

// Math.random() * (max - min) + min -> Genera un numero aleatorio entre intervalos
const aleatorio = Math.random() * (30-15)+15
console.log("Numero aleatorio entre 15 y 30", aleatorio);

// Math.round() -> Redondea un numero
console.log("Mi numero aleatorio redondeado es: ", Math.round(aleatorio))

const myArray = ["hola", "mundo", "como", "estas", "hoy"]
