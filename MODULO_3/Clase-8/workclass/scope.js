// VAR vs LET vs CONST

/* VAR */
var edad = 18;
edad = 20;
edad = 5;

var edad = 15;
console.log(edad);

var edad;
console.log(edad); // undefined


/* LET */
let ciudad = 'Bogotá';
ciudad = 'Medellin';
console.log(ciudad);

// let ciudad = 'Lima'; -> Muestra un error porque ya esta declarada la variable ciudad

let ciudadano; // undefined
console.log(ciudadano);

let animales = ['perro', 'gato'];
animales = [];
animales.push('tortuga');
console.log(animales);


/* CONST */
const nombre = 'Juan';
console.log(nombre);

// nombre = 'Pedro'; -> Lanza un error porque una constante no se puede reasignar
// const nombre = 'Pablo'; -> -> Muestra un error porque ya esta declarada la variable nombre

const mascotas = ['perro', 'gato'];
// mascotas = []; -> Lanza un error porque una constante no se puede reasignar
mascotas.push('tortuga');
console.log(mascotas);

// const pais; -> Lanza un error porque una constante debe estar inicializada con un valor

var loquesea = 'sdfsdfdsf';
/*
    VAR
    - Scope: Función
    - Re asignar: Sí
    - Re declarar: Sí
    - Declarar sin valor inicial: Sí
    - Hoisting: undefined


    LET
    - Scope: Bloque
    - Re asignar: Sí
    - Re declarar: No
    - Declarar sin valor inicial: Sí
    - Hoisting: TDZ (zona de muerte temporal)


    CONST
    - Scope: Bloque
    - Re asignar: No
    - Re declarar: No
    - Declarar sin valor inicial: No
    - Hoisting: TDZ (zona de muerte temporal)
*/

// Hoisting
/*console.log('hola: ', hola);
var hola = 'hola';
console.log('hola: ', hola);

console.log(holaLet);
let holaLet = 'hola';*/


// SCOPE
// El "scope" en JavaScript se refiere al alcance de una variable, es decir, dónde en tu código puedes usar y acceder a esa variable.
// Imagina que tienes un montón de cajas, cada una con un nombre escrito en ella.
// El "scope" sería como el lugar donde puedes ver y usar esas cajas.
// En Js los scopes se determinan por las llaves { } (Scope de bloque) o por funciones (Scope de funcion).
// Todos parten de un scope global (donde se empieza a ejecutar un programa)
// Las variables definidas dentro de una función sólo son accesibles dentro de esa función, a menos que sean variables globales (estan fuera de la funcion).
// Nota: La clave para entender scopes tanto de bloque como de funcion es preguntar dónde y cómo estoy usando una variable y cómo la estoy declarando (let, const o var)

// Scope de bloque
// Javascript cuando se encuentra con multiples scopes anidados, verifica las variables de adentro hacia afuera
// Si no existe una variable en el scope mas interno (inner scope) la buscará en el scope mas externo (outer scope)
let objeto = 'Computador';
console.log('objeto: ', objeto);

if (true) {
    console.log('objeto dentro del if: ', objeto);
}

if (true) {
    if (true) {
        console.log('objeto dentro del if anidado: ', objeto);
    }
}

let fruta = 'Fresa';
var fruta2 = 'Mora';

if (true) {
    let fruta = 'Mango';
    var fruta2 = 'Limon';
    console.log(fruta);
    console.log(fruta2);
}

console.log(fruta); // Fresa
console.log(fruta2); // Limon

var estudiante = 'Gabriel';
function doSomething() { // ------------------------ es como si hubiera un muro
    var estudiante = 'Felipe';
    let estudiante2 = 'Camilo';
    
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    var estudiante3 = 'Alejandro';
                }
            }
        }
        console.log(estudiante3);
    }
    console.log('estudiante2: ', estudiante2);
    console.log('estudiante: ', estudiante);
    console.log('estudiante3: ', estudiante3);
}

//console.log(estudiante3);

doSomething();