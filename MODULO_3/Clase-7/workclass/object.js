// OBJETOS
// Los objetos en JavaScript son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas.
// Comparados con otros tipos de datos como strings, números y booleanos, los objetos pueden contener múltiples valores y métodos.

// Sintaxis
const objeto = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['perro', 'gato'],
    saludar: () => console.log('Hello world'),
    objetoInterno: {
        a: 1,
        b: 'hola',
        c: {
            z: 58
        }
    }
};

console.log(objeto);

// La forma antigua de hacerlo
let persona = {};
console.log(persona);
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 25;
persona.nacionalidad = 'Colombiana';
console.log(persona);

// Acceder a las propiedades de un objeto
console.log(objeto.edad);
console.log(objeto.animales);
console.log(objeto.objetoInterno.b);
console.log(objeto.objetoInterno.c.z); // objeto.objetoInterno.c.z.?.?
objeto.saludar();

objeto.profesion = 'Programador';
console.log(objeto.profesion);

// Eliminar una propiedad
delete objeto.edad;
console.log(objeto);
console.log(objeto.edad); // undefined


// Otras formas de crear objetos

// Object.create
const infoPersona = {
    nombre: 'Ana',
    apellido: 'Suarez',
    edad: 20,
    direccion: 'Calle 3',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion);
console.log(infoProfesion.nombre);
console.log(infoProfesion.apellido);
infoProfesion.profesion = 'Diseñadora';
infoProfesion.experiencia = 5;
infoProfesion.cargo = 'jefe';
console.log(infoProfesion);
console.log(infoProfesion.profesion);
console.log(infoProfesion.experiencia);
console.log(infoProfesion.cargo);


// Object.assign
const objeto1 = { a: 'cualquier cosa', b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

const objetoFinal = Object.assign({}, objeto1, objeto2, objeto3);
console.log(objetoFinal);
objetoFinal.w = 5;
console.log(objetoFinal);


// Object.freeze
const personFreeze = {
    nombre: 'Cesar',
    edad: 30,
    mascotas: ['tortuga', 'iguana'],
    objetoInterno: {
        ab: 1
    }
};

Object.freeze(personFreeze);
// No tiene efecto porque el metodo freeze evita cualquier modificacion sobre el objeto (propiedades)
personFreeze.nombre = 'Pedro';
personFreeze.edad = 18;
personFreeze.direccion = 'Calle 1'; // Lo mismo aqui, no deja agregar nuevas propiedades
console.log(personFreeze);

personFreeze.mascotas.push('gato');
console.log(personFreeze);
personFreeze.mascotas = ['gato'];
personFreeze.objetoInterno.ab = 2;
console.log(personFreeze);
personFreeze.objetoInterno = { ac: 5 };
personFreeze.mascotas.pop();
console.log(personFreeze.mascotas);
personFreeze.mascotas = [];
console.log(personFreeze);


// Object.keys
console.log(Object.keys(personFreeze));
const keys = Object.keys(personFreeze);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key);
}

console.log('----------------------');

// Object.values
console.log(Object.values(personFreeze));
const values = Object.values(personFreeze);
for (let i = 0; i < values.length; i++) {
    const value = values[i];
    console.log(value);
}

console.log('----------------------');

// Object.entries
console.log(Object.entries(personFreeze));
const entries = Object.entries(personFreeze);
for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    console.log(entry);
}

// For in
for (const key in personFreeze) {
    console.log(key)
}


// Valor vs referencia
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

const obj1 = { a: 1, b: true };
const obj2 = { a: 1, b: true };
console.log(obj1 === obj2);

const obj3 = obj1; // Comparten la misma referencia en memoria: obj3 -> obj1 -> { a: 1, b: true }
console.log(obj3 === obj1);
console.log(obj3 === obj2); // false porque no estan relacionados

obj3.a = 45;
console.log(obj3);
console.log(obj1);
console.log(obj2);

// Como evito que se modifiquen valores en varios objetos que comparten referencia en memoria
const obj4 = Object.create(obj1);
console.log(obj4.a);
console.log(obj4.b);
obj4.a = 78;
console.log(obj4);
console.log(obj1);