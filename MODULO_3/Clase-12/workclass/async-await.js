// Async/await es una característica introducida en ECMAScript 2017 (también conocido como ES8) que simplifica el trabajo con funciones asíncronas y promesas en JavaScript.
// Esta característica permite escribir código asíncrono de manera más legible y mantenible, especialmente cuando se trabaja con múltiples operaciones asíncronas.

/*
    La sintaxis de async/await se compone de dos palabras clave principales: async y await.

    async: Se utiliza para declarar que una función devuelve una promesa. Dentro de una función async, podemos utilizar la palabra clave await para esperar a que se resuelva una promesa.
    await: Se utiliza para pausar la ejecución de una función async hasta que una promesa se resuelva. Esto permite que el código asíncrono se comporte de manera más similar al código síncrono.
*/

// Como usay async await

async function getPhoto(photoId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
        console.log(response);
        const photo = await response.json();
        console.log(photo);
    } catch(error) {
        console.error('Esto es un error: ', error);
    }
}

//getPhoto(100);


// RETO: Hacer un programa que le ayude a una madre saber si su hijo se portara bien y si obtendra buenas calificaciones
// Si se porta bien y obtiene buenas calificaciones entonces le compran un telefono
// Si se porta mal u obtiene malas calificaciones lo castigan

let comportamiento = true;
let calificaciones = true;

const verificarComportamiento = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (comportamiento) {
            resolve(true);
        } else {
            reject('Te portaste muy mal');
        }
    }, 5000);
});

const verificarCalificaciones = new Promise((resolve, reject) => {
    if (calificaciones) {
        resolve(true);
    } else {
        reject('Te falto estudiar mas');
    }
});


async function obtenerPremio() {
    try {
        /* Solucion bloqueante
        const respComportamiento = await verificarComportamiento(); // 20s
        const respCalificaciones = await verificarCalificaciones; // 15s

        if (respComportamiento && respCalificaciones) { // 35s
            console.log('Te ganaste un telefono');
        }*/

        // Solucion no bloqueante
        const [ respComportamiento, respCalificaciones ] = await Promise.all([ verificarComportamiento(), verificarCalificaciones ]); // 20s

        if (respComportamiento && respCalificaciones) {
            console.log('Te ganaste un telefono');
        }

    } catch(err) {
        console.log('Error: ', err);
    }
}

//obtenerPremio();

// Callbacks vs Promises vs async/await

// Garantizar el orden de ejecucion (tarea 1, tarea 2,...) con callbacks
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 1...');
        callback();
    }, 7000);
};

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 3...');
        callback();
    }, 5000);
};

const tarea4 = () => {
    setTimeout(() => {
        console.log('Ejecutando tarea 4...');
    }, 700);
};

/*tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            tarea4()
        });
    });
});*/


// Garantizar orden de ejecución con promises
function generatePromise(tareaId, milliseconds) {
    return new Promise((resolve, reject) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Ejecutando tarea ${tareaId}...`);
            }, milliseconds);
        } else {
            resolve(`Ejecutando tarea ${tareaId}...`);
        }
    });
};

const promise1 = generatePromise(1, 7000);
const promise2 = generatePromise(2, 2000);
const promise3 = generatePromise(3, 5000);
const promise4 = generatePromise(4, 700);

/*promise1
    .then(res => {
        console.log(res);
        return promise2;
    })
    .then(res => {
        console.log(res);
        return promise3;
    })
    .then(res => {
        console.log(res);
        return promise4;
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log('Error: ', err));*/


// Garantizar orden de ejecución con async/await
const task1 = () => generatePromise(1, 7000);
const task2 = generatePromise(2, 2000);
const task3 = () => generatePromise(3, 5000);
const task4 = generatePromise(4, 700);

async function executeTasks() {
    // Solucion bloqueante
    /*const resp1 = await task1();
    console.log(resp1);
    const resp2 = await task2;
    console.log(resp2);
    const resp3 = await task3();
    console.log(resp3);
    const resp4 = await task4;
    console.log(resp4);*/

    // Solucion no bloqueante
    const [ resultado1, resultado2, resultado3, resultado4 ] = await Promise.all([ task1(), task2, task3(), task4 ]);
    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
    console.log(resultado4);
}

executeTasks();