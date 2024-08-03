// La coerción en JavaScript ocurre cuando se produce una conversión automática de un tipo de dato a otro tipo de dato.
// Esto se aplica al momento de hacer operaciones o comparaciones entre valores de diferentes tipos.
// Existen dos tipos de coerción: la coerción implícita y la coerción explícita.

// COERCION IMPLICITA
/*
    Es la conversion automatica de un tipo de dato a otro y esta a cargo de Javascript. Si el lenguaje encuentra alguna incoherencia
    al momento de hacer una operacion o comparacion ('10' + 1), lo interpreta a su manera y retorna un valor que puede ser erróneo
*/
console.log(4 + '4'); // '44' string
console.log(4 * '7'); // 28 number
console.log(4 - '7'); // -3 number
console.log(15 / '3'); // 5 number
console.log(4 * 'aeiou'); // NaN

console.log(2 + true); // 3 number
console.log('2' + true); // 2true string
console.log('2' - true); // 1 number
console.log(2 - 'true'); // NaN
console.log(false - 3); // -3 number
console.log(false - false); // 0 number
console.log(false + 'false'); // falsefalse string
console.log(false - 'false'); // NaN

console.log(!4); // false
console.log(!0); // true
console.log(!-5); // false

console.log(true == 1); // true
console.log(true == 2); // false
console.log(true === 1); // false
console.log('1' === 1); // false
console.log(1 === 1); // true


// COERCION EXPLICITA
/*
    La coerción explícita es la transformación de tipos de datos que controlamos el resultado.
    Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean()
    para convertir a tipo número, string y lógico, respectivamente.
*/

// Evaluemos String
console.log(String('1')); // '1' string
console.log(String(1)); // '1' string
console.log(String(true)); // 'true' string
console.log(String(false)); // 'false' string
console.log(String(null)); // 'null' string
console.log(String(undefined)); // 'undefined' string

// Operaciones
const word = 'hola';
console.log(word + ' mundo');
console.log(`${word} mundo`);


// Evaluemos Boolean

// Falsy values
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false

// Truthy values
console.log(Boolean(true)); // true
console.log(Boolean(5)); // true
console.log(Boolean(-5)); // true
console.log(Boolean('algo')); // true

// Operaciones
console.log(!false); // true
console.log(!!false); // false
console.log(true && false); // AND -> false
console.log(true || true); // OR -> true
console.log(false || true); // OR -> true
console.log(false || 0); // 0
console.log(false || 'something'); // 'something'
// nullish op
console.log('something' || false); // 'something'
console.log(false ?? 'something'); // false
console.log(0 ?? 'something'); // 0
console.log(null ?? 'something'); // 'something'
console.log(undefined ?? 'something'); // 'something'


// Evaluemos Number
console.log(Number(150)); // 150 number
console.log(Number('1')); // 1 number
console.log(Number('gfhjghj')); // NaN
console.log(Number(true)); // 1 number
console.log(Number(false)); // 0 number
console.log(Number('true')); // NaN
console.log(Number('false')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Operaciones
console.log(1 + 15);
console.log(111 - 15);
console.log(120 * 15);
console.log(10 / 5);

// Ejemplo
const numberServer = Number('0');
const numberLocal = 150;

console.log(numberLocal + numberServer); // 150
