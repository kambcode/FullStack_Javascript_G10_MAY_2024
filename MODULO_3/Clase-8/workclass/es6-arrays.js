// MAP, FILTER, FIND, FOREACH, SOME, EVERY
const numbers = [1,2,3,4,5,6,7,8];

// map: Crea un nuevo array con los resultados de la llamar una función (callback) como argumento en cada elemento del array original.
const doubled = numbers.map(element => element * 2);
const mitad = numbers.map(element => element / 2);

console.log(numbers);
console.log(doubled);
console.log(mitad);


// Forma tradicional
/*function map() {
    const newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        newArray.push(number * 2);
    }

    return newArray;
}*/

//const result = map();
//console.log(result);


// filter: Retorna un nuevo array con todos los elementos que pasen una condicion proporcionada por una función (callback)
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
//console.log(evenNumbers);
//console.log(oddNumbers);

// Forma tradicional
/*function filter() {
    const newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 0) {
            newArray.push(number);
        }
    }

    return newArray;
}

const pares = filter();
console.log(pares);*/


// find: Este método retorna el primer elemento de un array que cumple una condicion dada en el callback
// Si no encuentra ningun elemento que cumpla con la condicion, retorna undefined
const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];
const frutaEncontrada = frutas.find(fruta => fruta.length < 6);
const frutaEncontradaX = frutas.find(fruta => fruta.length === 4);
const frutasEncontradas = frutas.filter(fruta => fruta.length < 6); // Filter retorna TODOS los items que cumplan la condicion
console.log(frutaEncontrada);
console.log(frutaEncontradaX);
console.log(frutasEncontradas);

// Forma tradicional
/*function find() {
    for (let i = 0; i < frutas.length; i++) {
        const fruta = frutas[i];
        if (fruta.length < 6) {
            return fruta;
        }
    }
}

const frutaEncontrada2 = find();
console.log(frutaEncontrada2);*/


// forEach: Ejecuta una funcion por cada elemento del array (callback). No retorna nada.
numbers.forEach((number, index) => {
    console.log(`indice: ${index}`);
    console.log(`numero: ${number}`);
    console.log('-------');
});

// Forma tradicional
/*for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`indice: ${i}`);
    console.log(`numero: ${number}`);
    console.log('-------');
}*/


// some: Retorna true si al menos un elemento del array cumple con la condicion dada en el callback
// Si no, retorna false
const numeros = [97,35,64,205,147,400,41,72,10];
const esMayorA500 = numeros.some(numero => numero > 400);
const empiezaPor9 = numeros.some(numero => String(numero).startsWith('9'));
console.log(esMayorA500);
console.log(empiezaPor9);
console.log(numeros.some(numero => String(numero).startsWith('10')));
console.log(numeros.some(numero => numero < 150 && numero > 0));

// Forma tradicional
function some() {
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero >= 500) {
            return true;
        }
    }

    return false;
}

const respuesta = some();
console.log('Respuesta some: ', respuesta);


// every: Retorna true si todos los elementos del array cumplen una condicion dada en el callback.
// Si no, retorna false
const listaEdades = [20,22,25,38,42,17,21];
const todosSonMayoresEdad = listaEdades.every(edad => edad >= 18);
console.log(todosSonMayoresEdad);


// includes: Retorna true si encuentra un elemento que coincide con el valor que le pasamos como argumento
const includesSomeNumber = numeros.includes(10);
console.log(includesSomeNumber);

// RETOS
const numbers1 = [21, 33, 40, 50, 71, 70, 742, 80, 90, 100];

// 1. Retornar un nuevo array con los valores con las raices cuadradas de cada numero (Math.sqrt(n))
const numbersCuadrados = numbers1.map((number)=> Math.sqrt(number));
console.log(numbersCuadrados);

// 2. Hacer el every en la forma tradicional con el ejericio de las edades
function every() {
    for (let i = 0; i < listaEdades.length ; i++) {
        const number = listaEdades[i];
        if (number < 18) {
            return false;
        }   
    }
    return true;
}
console.log('resultado every: ', every());

// 3. Filtrar los numeros que empiecen en 7 y sean pares
const filteredNumbers = numbers1.filter(number => String(number).startsWith('7') && number % 2 === 0);
console.log(filteredNumbers);