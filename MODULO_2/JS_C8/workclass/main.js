// funciones

// "Una funcion en javascript es un bloque de codigo REUTILIZABLE, que realiza
// una tarea especifica."

// Realizar un programa que salude a la persona y le diga su fecha de nacimiento:

// const persona1 = "Jonny";
// const persona1age = 38;
// const birthday = 2024 - persona1age;
// console.log("Hola ", persona1, " naciste en: ", birthday);

// const persona2 = "Jorge";
// const persona2age = 42;
// const birthday2 = 2024 - persona2age;
// console.log("Hola ", persona2, " naciste en: ", birthday2);

// const persona3 = "Sandra";
// const persona3age = 32;
// const birthday3 = 2024 - persona3age;
// console.log("Hola ", persona3, " naciste en: ", birthday3);

// const persona4 = "Carlos";
// const persona4age = 36;
// const birthday4 = 2024 - persona4age;
// console.log("Hola ", persona4, " naciste en: ", birthday4);

// --------------------------------------------------------
// Solucion con funciones:
// estructura = function nombre (argumento o parametro) {Que queremos hacer con la funcion}

function calcularFechaNacimiento (age) {
    const nacimiento = 2024 - age;
    console.log("funcion:: Hola naciste en: ", nacimiento);
}

// calcularFechaNacimiento(38);
// const person = "Jorge"
// const personAge = 42
// calcularFechaNacimiento(person1age);

// RETO
const person1 = "Pablo";
const person2 = "Pedro";
const person3 = "Ana";
// Escribe una funcion que reciba un nombre como parametro y que salude a la persona
// ejm. console.log("Hola", personName)
// function sayHello

function sayHello (name){
    console.log("Hola", name)
}

// sayHello("Pablo") // "Hola Juan"
// sayHello(person2) // "Hola Pedro"
// sayHello(person1) // "Hola Pablo"
// sayHello(person3) // "Hola Ana"


// Bogota -> Bogota = 10.000
// Bogota -> Medellin = 15.000
// Bogota -> Cartagena = 20.000

// MERCADOLIBRE
// Proceso de Compra de libreta
// Facturacion = 35.000 + 10.000
// Total a pagar es: 45.000

// Rectificacion de compra
// Facturacion = 35.000 + 10.000
// Total a pagar es: 45.000

// Pasarela de pagos
// Facturacion = 35.000 + 10.000
// Total a pagar es: 45.000


function compra (valorProducto){
    const facturacion = valorProducto + 10000
    console.log("Total a pagar es: ", facturacion)
}

// Proceso de Compra de libreta
// compra(35000)
// Rectificacion de compra
// compra(35000)
// Pasarela de pagos
// compra(35000)

// ------------------------------------------------------------
// 1. Vamos a crear una funcion que calcule el IMC de una persona
// imc = peso / (altura * altura)

// 2. Luego, con el IMC, vamos a decirle a esa persona si su IMC es elevado(<=10) o no(>10)

// return -> En una funcion se utiliza el return para devolver un valor desde la funcion,
//           al lugar donde fue llamada

function calcImc (peso, altura){
    const result = peso / (altura * altura) // 14.69
    return result // 14.69
}

// const imc = calcImc(45, 1.75) // 14.69
// console.log("Tu Indice de Masa Corporal es: ", imc)

// if(imc >= 10){
//     console.log("Tu IMC es elevado")
// } else {
//     console.log("Tu IMC es bajo")
// }


// RETO 2.
// crear una funcion que calcule el valor de un producto + el envio

// function calcPrecioTotal (precioProducto, precioEnvio){
// La funcion debe retornar precioProducto + precioEnvio
//}

function calcPrecioTotal (precioProducto, precioEnvio){
    const precioTotal = precioProducto + precioEnvio // 30.000
    const iva = precioTotal * 0.19
    // Si queremos retornar màs de una variable de una funcion, podemos convertir
    // esos valores como una arreglo, de la siguiente manera
    return [precioTotal, iva] // 30.000 || 5700
}

// De esta manera podemos mirar cada uno de los valores del arreglo
const envio1 = calcPrecioTotal(20000, 10000) // [30000, 5700]
console.log("El precio total del producto es: ", envio1[0]) // 30.000
console.log("El valor del iva del producto es: ", envio1[1]) // 5.700

const envio2 = calcPrecioTotal(45000, 15000)
console.log("El precio total del segundo producto es: ", envio2[0]) // 60.000