// ARRAYS
// Es una estructura de datos que puede contener múltiples elementos, 
// accesibles a través de un índice numérico (empieza en 0).
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivos (string, boolean, number, null, undefined, etc) como objetos y arrays.
const arregloPrincipal = [1, 2, 3, 'text', true, false, null, undefined, { a: 1 }, ['estudiante1', 'estudiante2']]; 
console.log(arregloPrincipal);

// Acceso a un elemento dentro de un array
console.log(arregloPrincipal[0]);
console.log(arregloPrincipal[1]);
console.log(arregloPrincipal[2]);
console.log(arregloPrincipal[3]);

console.log('length: ', arregloPrincipal.length);

//console.log(arreglo[9]);
console.log(arregloPrincipal[arregloPrincipal.length - 1]);
console.log(arregloPrincipal[arregloPrincipal.length - 1][0]);
console.log(arregloPrincipal[arregloPrincipal.length - 1][1]);

const arregloEstudiantes = arregloPrincipal[arregloPrincipal.length - 1]; // ['estudiante1', 'estudiante2']
//console.log(arregloEstudiantes[0]);
//console.log(arregloEstudiantes[1]);
console.log(arregloEstudiantes[arregloEstudiantes.length - 1]);

// Modificar el valor dentro de un array
arregloPrincipal[0] = true;
arregloPrincipal[1] = 'string';
arregloPrincipal[2] = 50;
arregloPrincipal[arregloPrincipal.length - 1] = 'cualquier cosa';

console.log(arregloPrincipal);


// Ciclos
for (let i = 0; i < 5; i++) {
    console.log('desde el for: ', i);
}

let count = 0;
while(count < 5) {
    console.log('desde while: ', count);
    count++;
}

// Iteración con arrays
// Podemos usar ciclos para acceder a cada elemento dentro de un array
// Ciclo for
for (let i = 0; i < arregloPrincipal.length; i++) {
    const element = arregloPrincipal[i];
    console.log(`${i}: ${element}`);
}

// Ciclo forEach -> built-in
arregloPrincipal.forEach((element, index) => console.log(`${index}: ${element}`));

arregloEstudiantes.forEach((element, index) => console.log(`${index}: ${element}`));


// Ciclo for of
for (const item of arregloPrincipal) {
    console.log(item);
}


// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en js
const animals = ['tortuga', 'iguana', 'gato', 'gaviota', 'delfin', 'tiburon'];

// length -> Muestra la cantidad de elementos que hay en un array
console.log(animals.length);

// push -> Agrega uno o mas elementos al final del array y retorna el nuevo length
animals.push('jirafa', 'leon');
console.log(animals);
console.log(animals.length);

// pop -> Elimina el ultimo elemento dentro de un array y lo retorna
const animalRemoved = animals.pop();
console.log(animals);
console.log(animalRemoved);
console.log(animals.length);

// shift -> Elimina el primer elemento de un array y lo retorna
const animalRemovedWithShift = animals.shift();
console.log(animals);
console.log(animalRemovedWithShift);
console.log(animals.length);

// unshift -> Agrega uno o mas elementos al inicio del array y retorna la nueva longitud del array
animals.unshift('conejo', 'perro');
console.log(animals);
console.log(animals.length);

// split -> En realidad es un metodo de los strings pero convierte un string a un array
const palabra = 'reconocer';
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Invierte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y vicerversa
const numbers = [1,2,3,4,5,6];
const reversedArray = numbers.reverse();
console.log(numbers);
console.log(reversedArray);

// join -> Une todos los elementos de un array en un string y retorna ese string
const reversedWord = splittedArray.reverse();
console.log('palabra invertida en forma de array: ', reversedWord);
const palabraInvertida = reversedWord.join('');
console.log(palabraInvertida);
console.log('es palindrome? ', palabraInvertida === palabra);


// RETO
// Partiendo de este array de frutas ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango']
// Cuales frutas tienen menos de 6 caracteres (length)
// El resultado en cada ejercicio debe ser un array con las frutas que pasaron las condiciones

const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];

// 1. Cuales frutas tienen menos de 6 caracteres (length -> en strings)
const frutasFiltradas = [];

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (fruta.length < 6) {
        frutasFiltradas.push(fruta);
    }
}

console.log(frutasFiltradas);


// Comparación entre arrays (referencia vs valor)
// En arrays y objetos la comparación se hace por referencia y no por valor

// Comparacion en primitivos
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

// Comparacion en arrays
const arr1 = [1,7,8];
const arr2 = [1,7,8];
console.log(arr1 === arr2);

const arr3 = arr1;
console.log(arr3 === arr1); // arr3 -> arr1 -> [1,7,8]
arr3[0] = 2;
console.log(arr3);
console.log(arr1);
