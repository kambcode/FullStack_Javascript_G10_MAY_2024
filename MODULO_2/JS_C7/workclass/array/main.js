// Array o Arreglos o Listas

// Los arreglos son listas o estructuras de datos que permiten almacenar multiples valores
// del mismo tipo o de diferentes tipos en una sola variable

// Tipos de datos
// String o Cadenas texto
// const fullName = "Kambcode Latam"
// Numerico
// const age = 3;
// Boleano
// const isAvalabale = true
// Arreglo
// const ofertasEnEquipos = ["Hp Escritorio", "Oculus", "Xbox", "Computadoras", "Controladores"]    


// Ejemplo una variable que tiene una lista de compras
const shoppingList2 = ["leche", "pan", "arroz", "manzanas", "peras"];
// console.log("Mi lista de compras es: ", shoppingList2);

const years = [2000, 2001, 2002, 2003, 2004, 2005];
// console.log("Arreglo de tipo numerico", years);

const mixedArray = ["kambcode", 3, true, "Daniel", 32, false];
// console.log("Este es un array mixto", mixedArray);

const arrayVacio = [];
// console.log("Este es un array vacio", arrayVacio);

// --------------------------------------------------------
// De la forma larga y menos eficiente
// let shoppingList = [];

// const element = prompt("Ingresa algo a la lista de compras"); // uvas
// shoppingList.push(element)
// console.log("Lista de cormpas", shoppingList);

// const element2 = prompt("Ingresa algo a la lista de compras"); // tomates
// shoppingList.push(element2)
// console.log("Lista de cormpas", shoppingList);

// const element3 = prompt("Ingresa algo a la lista de compras"); // mandarinas
// shoppingList.push(element3)
// console.log("Lista de cormpas", shoppingList);

// Ahora, de la forma eficiente utilizando ciclos (ya que es una tarea repetitiva)

let shoppingList = [];// "uvas", "bananos", "mandarinas" 
//for(variable inicial; condicion; incremento)
// for(let counter = 1; counter <= 5; counter++){
//     const element = prompt("Ingresa algo a la lista de compras"); // uvas
//     shoppingList.push(element)
//     console.log("Lista de compras", shoppingList);
// }

// document.write("Agregaste ", shoppingList.length, " Elementos a la lista")


// for(let element = 0; element < shoppingList.length; element++){
//     document.write("<li>", shoppingList[element], "</li>")
// }


// RETO
// Generar un arreglo (lista) que tenga los numeros del 1 al 1000
// console.log(myArray) -> [1, 2, 3, 4, 5... 1000] // volvemos a las 8:50p.m

let myArray = [];

for(let count = 1; count <= 1000; count++){
    myArray.push(count)
}

console.log(myArray);
