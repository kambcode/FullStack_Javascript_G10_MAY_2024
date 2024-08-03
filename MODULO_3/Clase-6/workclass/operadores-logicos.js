// OPERADORES LOGICOS
/*
    En el mundo de la programación, los operadores lógicos son herramientas que nos permiten tomar decisiones basadas en condiciones.
    Imaginemos que tenemos una caja mágica que puede responder preguntas con "sí" o "no".
    Los operadores lógicos son como las preguntas que haces a esta caja para tomar decisiones.
*/

// Operador AND (Y) -> &&
// El operador AND se utiliza cuando queremos asegurarnos de que dos condiciones sean verdaderas para que una acción se realice. 
// Es como decir: "¿Quiero ir al cine y tengo suficiente dinero?" Solo si tengo ambas cosas, podré ir al cine.
const quieroIrAlCine = true;
const tengoSuficienteDinero = true;

if (quieroIrAlCine && tengoSuficienteDinero) {
    console.log('Puedo ir al cine');
} else {
    console.log('No puedo ir al cine');
}

// Operador OR (O) -> ||
// El operador OR se utiliza cuando queremos que al menos una de dos condiciones sea verdadera para que una acción se realice.
// Es como decir: "¿Quieres un refresco o una limonada?" Si respondes "sí" a cualquiera de las opciones, ¡puedes tener algo para beber!
const quieroRefresco = true;
const quieroLimonada = false;

if (quieroRefresco || quieroLimonada) {
    console.log('Tengo algo para beber');
} else {
    console.log('No quiero beber nada');
}

// Operador NOT (NO) -> !
// El operador NOT se utiliza para negar una condición. Es como decir lo opuesto de lo que se pregunta.
// Por ejemplo, recordando el dicho popular que dice "Al que no quiere caldo, se le dan dos tazas"
// En la primera frase se puede deducir que se esta negando una afirmacion (querer caldo) y al negarlo
// la respuesta que obtendremos sera "se le dan dos tazas"
const quieroCaldo = false;

if (!quieroCaldo) {
    console.log('Me dan dos tazas');
} else {
    console.log('Me gusta el caldo');
}

// CONDICION TERNARIA
const edad = 14;

/*if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}*/

console.log(edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad');


const ciudad = 'Bogotá';
let gentilicio = '';

if (ciudad === 'Bogotá') {
    gentilicio = 'rolo';
} else if (ciudad === 'Medellin') {
    gentilicio = 'paisa';
} else {
    gentilicio = 'otro';
}

console.log(gentilicio);

const gentilicio2 = ciudad === 'Bogotá' ? 'rolo' : ciudad === 'Medellin' ? 'paisa' : 'otro';
console.log(gentilicio2);


// OPERADORES NULLISH COALESCING (Fusion de nulos): ?? y ||
// valores truthy: 'abcd', true, < 0 >
// valores falsy: '', false, 0, -0, NaN, null, undefined

// ?? -------------------------
const isValid = NaN;
const validation = isValid ?? 'Otra cosa'; // Este operador solo evalua que la variable NO sea null o undefined (es mas relax)
console.log(validation);

// Esto es lo que haría JS por debajo
let val;
if (isValid !== null && isValid !== undefined) {
    val = isValid;
} else {
    val = 'Otra cosa';
}

console.log(val);


// || ------------------------
const isValid2 = 'abcd';
const validation2 = isValid2 || 'Otra cosa'; // Este operador evalua que la variable NO sea falsy (es mas rigido)
console.log(validation2);

// Esto es lo que haria JS por debajo
let val2;
if (isValid2 !== null && isValid2 !== undefined && isValid2 !== 0 && isValid2 !== false && isValid2 !== -0 && isValid2 !== '' && isValid2 !== NaN) {
    val2 = isValid2;
} else {
    val2 = 'Otra cosa';
}

console.log(val2);

// OPERADORES con AGRUPACION ()
// Al igual que en operaciones matematicas los parentesis tienen prioridad sobre las operaciones que
// estan encerradas dentro de ellos, es decir se deben resolver primero antes de continuar
console.log(true && (false || false)); // false
console.log(true || true && (true && false)); // true
console.log((true || false) && true && (false && true && true)); // false
console.log((true || false) && true && (false && true || true)); // true

// ORDEN DE PRIORIDAD
// 1. ()
// 2. ! negacion
// 3. && and
// 4. || or

// RETO
// !false && (!false || !false)
// true && (!false || !false)
// true && (true || true)
// true && true
// true

console.log(!false && (!false || !false));