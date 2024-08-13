// CODIGO SINCRONO
// Una tarea sincrona es una tarea que tiene un tiempo de ejecucion especifico
// y que el lenguaje ejecutara inmediatamente no importa cuanto tarde, por lo
// que hará esperar a la siguiente linea del codigo hasta que la anterior linea
// se haya terminado de ejecutar.
// Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
// thread(hilo --> proceso que la aplicacion puede usar para completar tareas)
// En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

// Ejemplo de JS sincrono
/*for (let i = 0; i < 150000; i++) {
    console.log(i);
}

console.log('tarea 2');
console.log('tarea 3');*/


// CODIGO ASINCRONO
// Una tarea asincrona es una tarea que se va a ejecutar en el futuro
// bien sea con un tiempo establecido o no y que no sabemos con exactitud cuando va a terminar.
// JavaScript asincrono nos permite ejecutar tareas simultaneamente

/*setTimeout(() => {
    console.log('Ejecutando tarea 1...');
}, 5000);

console.log('Ejecutando tarea 2...');

setInterval(() => {
    console.log('Ejecutando 3...');
}, 2000);*/

// Hay tres tecnicas para implementar JavaScript asincrono:
//1. callbacks
//2. promises
//3. async await

// Callbacks
// ¿Qué es una callback?
// Una callback es una función que se pasa como argumento a otra función y que se ejecuta después de que cierto proceso o tarea haya finalizado.
// Es como dejar un número de teléfono para que te llamen cuando algo esté listo.

// ¿Cómo se usa una callback?
// En JavaScript, las callbacks son comunes en situaciones donde se realiza una operación asíncrona, como cargar un archivo o realizar una solicitud a un servidor.
// En lugar de bloquear el código y esperar a que se complete la operación, se pasa una función callback que se ejecutará una vez que la operación haya terminado.
// Tambien se pueden usar en funciones de orden superior (High order function), que son funciones que pueden recibir como parametro una funcion y/o retornar dicha funcion.

// Sync callbacks -> Se ejecutan inmediatamente (dentro un proceso) y son bloqueantes
const saludoCarlos = () => console.log('Hola soy Carlos');
const saludoJony = () => console.log('Hola soy Jony');
const saludoAndres = () => console.log('Hola soy Andres');
const saludoGenerico = (nombre) => console.log(`Hola soy ${nombre}`);

function mostrarSaludo(callback) {
    // cuando el tipo de la variable callback es diferente a function, lanza un error
    // porque solo una funcion puede ejecutarse: nombreDeLaFuncion()
    console.log(typeof callback); 
    callback();
}

mostrarSaludo(saludoCarlos);
mostrarSaludo(saludoJony);
mostrarSaludo(saludoAndres);
mostrarSaludo(() => console.log('Hola soy Sergio'));
mostrarSaludo(() => saludoGenerico('Julieth'));


// Veamos como funciona el forEach por debajo
const animals = ['perro', 'gato'];
animals.forEach((animal, index) => console.log(animal));

function myForEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        callback(element, i);
    }
}

myForEach(animals, (animal, index) => {
    if (animal.startsWith('p')) {
        console.log(index)
        console.log('Tengo un perro')
    } else {
        console.log('Tengo un gato');
    }
});


// Async callbacks -> Se ejecutan cuando algo pasa (un evento ocurre)
// Simulemos un autoservicio
const atenderCarro1 = (callback) => {
    setTimeout(() => {
        console.log('Atendiendo carro 1...');
        callback();
    }, 5000);
};

const atenderCarro2 = (callback) => {
    setTimeout(() => {
        console.log('Atendiendo carro 2...');
        callback();
    }, 2000);
};

const atenderCarro3 = () => {
    setTimeout(() => {
        console.log('Atendiendo carro 3...');
    }, 1500);
};

// Callback hell
atenderCarro1(() => {
    atenderCarro2(() => {
        atenderCarro3();
    });
});