function mostrarDato(callback) {
    console.log(typeof callback + ': ' + callback);
    callback(); // Invocacion/llamada/ejecucion de una funcion
}

//mostrarDato(2);
//mostrarDato('hola');
//mostrarDato(true);
//mostrarDato(null);
//mostrarDato(undefined);
//mostrarDato(['a', 'b']);
//mostrarDato({a: 1});

// Un proceso de callback require como minimo dos funciones:
// 1. La funcion que recibe ese callback como parametro conocida como funcion de alto orden -> mostrarDato
// 2. El mismo callback que se envia como parametro de la funcion de alto orden -> mostrarDato
/*mostrarDato(function() {
    console.log('hola');
});

mostrarDato(function() {
    console.log('hellow');
});*/


// Practiquemos
const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 17
    },
    {
        nombre: 'Catalina',
        apellido: 'Jimenes',
        edad: 25
    },
    {
        nombre: 'Federico',
        apellido: 'Martinez',
        edad: 16
    },
];

// RETO
// 1. Filtrar que estudiantes tienen son mayores de edad usando el metodo filter de los arrays de js 
// y tambien hacerlo de la forma tradicional usando ciclos normales (for)
const estudiantesMayoresDeEdad = estudiantes.filter(function(estudiante) { return estudiante.edad >= 18 });
const estudiantesMenoresDeEdad = estudiantes.filter(estudiante => estudiante.edad < 18);
const estudiantesNombreEmpiezaPorJ = estudiantes.filter(estudiante => estudiante.nombre.startsWith('J'));
//console.log(estudiantesMayoresDeEdad);
//console.log(estudiantesMenoresDeEdad);
//console.log(estudiantesNombreEmpiezaPorJ);

function myFilter(callback) {
    const mayoresDeEdad = []; 
    
    for (let i = 0; i < estudiantes.length; i++) {
        const condition = callback(estudiantes[i]); // true o false
        if (condition) {
            mayoresDeEdad.push(estudiantes[i]);
        }
    }

    return mayoresDeEdad;
}

const estudiantesMayoresDeEdad2 = myFilter(function(estudiante) { return estudiante.edad >= 18 });
const estudiantesMenoresDeEdad2 = myFilter(estudiante => estudiante.edad < 18);
const estudiantesNombreEmpiezaPorJ2 = myFilter(estudiante => estudiante.nombre.startsWith('J'));
const estudiantesApellidoTerminaEnZ = myFilter(estudiante => estudiante.apellido.endsWith('z'));

// Esto lanza error porque ningun argumento es una funcion
//myFilter(1);
//myFilter('hola');

/*console.log('mayores de edad: ', estudiantesMayoresDeEdad2);
console.log('menores de edad: ', estudiantesMenoresDeEdad2);
console.log('nombre empieza por J: ', estudiantesNombreEmpiezaPorJ2);
console.log('apellido termina en z: ', estudiantesApellidoTerminaEnZ);*/


// 2. Hacer un programa que me simule el proceso de descargar un video.
// Hay que garantizar el orden de estos pasos:
// 1. Descargar el video: 6 segundos
// 2. Procesando video: 4 segundos
// 3. Video descargado
function descargarVideo(callback) {
    setTimeout(() => {
        console.log('descargando video');
        callback();
    }, 6000);
}

function procesarVideo(callback) {
    setTimeout(() => {
        console.log('procesando video');
        callback();
    }, 4000);
}

function videoDescargado() {
    setTimeout(() => {
        console.log('video descargado');
    }, 1500);
}

/*
    descargarVideo();
    procesarVideo();
    videoDescargado();
*/

descargarVideo(() => {
    procesarVideo(() => {
        videoDescargado();
    });
});
