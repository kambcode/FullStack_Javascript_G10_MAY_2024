// FUNCIONES
// ¿Qué es una función?
// Una función en JavaScript es un bloque de código que realiza una tarea específica.
// Puedes pensar en ella como una especie de máquina que toma algo (entradas), hace algo con eso, y luego produce un resultado (salida) o no.

// ¿Por qué usar funciones?
// Las funciones nos permiten escribir código reutilizable y modular.
// En lugar de escribir el mismo código una y otra vez, podemos definir una función que realice esa tarea y simplemente llamar a esa función cuando la necesitemos.

// Sintaxis básica:
// Para definir una función en JavaScript, usamos la palabra clave function, seguida del nombre de la función y paréntesis (), donde opcionalmente podemos especificar 
// los parámetros de entrada y de salida. Después, viene un bloque de código encerrado entre llaves {} que contiene las instrucciones que queremos que la función realice.

function nombreDeLaFuncion() {
    console.log('Hello world');
}

// funcion con parametros
function nombreDeLaFuncionConParametros(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
}

// LLamar a una función
// Una vez que hemos definido una función, podemos llamarla o invocarla en cualquier parte de nuestro código
// simplemente escribiendo su nombre seguido de los parentesis ()
nombreDeLaFuncion();

nombreDeLaFuncionConParametros(1, 'Hola');
nombreDeLaFuncionConParametros(2, 'Hello');

// Parámetros y argumentos:
// Los parámetros son variables que se utilizan en la definición de la función para representar los valores que se pasan a la función cuando se llama.
// Los argumentos son los valores reales que se pasan a la función cuando se llama.

// Valor de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave return.
// Esto es útil cuando queremos que nuestra función produzca algún resultado que podamos usar más tarde en nuestro programa.
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = sumar(5, 2);
console.log(resultado);
const resultado2 = sumar(41788, 45698);
console.log(resultado2);


// RETO
// Mostrar el nombre y la edad de una persona usando una funcion. Si la persona es mayor de edad debe decir que
// es mayor de edad y si no menor de edad.
function verificarMayoriaEdad(nombre, edad) {
    if (edad >= 18) {
        return `${nombre} es MAYOR de edad. Tiene ${edad} años`;
    }
    
    return `${nombre} es MENOR de edad. Tiene ${edad} años`;
}

const mensaje = verificarMayoriaEdad('Jony', 25);
const mensaje2 = verificarMayoriaEdad('Sergio', 14);
console.log(mensaje);
console.log(mensaje2);
console.log(verificarMayoriaEdad('Juan', 44));
console.log(verificarMayoriaEdad('Pedro', 30));

// Arrow functions
// Son funciones declaradas con una sintaxis mas practica para evitar escribir codigo de mas.
// Necesita ser guardada en una variable para poder ser ejecutada.
function restar(numero1, numero2) {
    return numero1 - numero2;
}

console.log(restar(11, 8));

const restarArrow = (numero1, numero2) => numero1 - numero2;
console.log(restarArrow(45, 21));

const mostrarObjeto = (palabra1, palabra2) => ({
    palabra1,
    palabra2,
});

const objeto = mostrarObjeto('hola', 'mundo');
console.log(objeto.hola);
console.log(objeto.palabra2);
console.log(mostrarObjeto('hello', 'world'));
console.log(mostrarObjeto('hi', 'world'));


// Funciones anónimas y expresiones de función:
// Además de las funciones con nombre que acabamos de ver, también puedes crear funciones anónimas (sin nombre).
// Las funciones anónimas deben guardarse en memoria para poder ser ejecutadas ya que no tienen un nombre o identificador definido. 
// Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de =), esto es una Expresión de función.
// Si queremos ejecutar una funcion anónima sin guardarla en memoria debemos usar las IIFE (sigla en inglés).

// Funcion anonima sin retorno
const saludar = function() {
    console.log('hi');
};

saludar();

// Funcion anonima con retorno
const multiplicar = function(primerNumero, segundoNumero) {
    return primerNumero * segundoNumero;
};

console.log(multiplicar(4,5));

// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function() {
    console.log('Saludos');
})();

(() => console.log('Saludando desde arrow function...'))();

// IIFE con retorno
const saludos = function() {
    return 'Saludos IIFE con retorno';
}();

console.log(saludos);

const saludos2 = (() => 'Saludos IIFE con retorno en arrow')();
console.log(saludos2);
