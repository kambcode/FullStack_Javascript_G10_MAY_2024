// Los operadores de comparacion son símbolos o palabras reservadas que se utilizan
// para comparar dos valores y devolver SIEMPRE un resultado booleano (true o false)
// que indica si la comparación es verdadera o falsa.
// Igualdad (== o ===)
// Desigualdad (!= o !==)
// Mayor que (>)
// Menor que (<)
// Mayor o igual que (>=)
// Menor o igual que (<=)
let edad = 18;
console.log('Eres mayor de edad? ', edad > 17);
console.log('Eres menor de edad? ', edad < 18);
console.log('Tienes 20 años? ', edad === 20);
console.log('Tienes una edad distinta a 18 años? ', edad !== 18);
console.log('Puedes entrar a una discoteca? ', edad >= 18);
console.log('Tu edad es menor o igual a 18 años? ', edad <= 18);

// RETO 1
// Hacer un programa que solicite al usuario ingresar dos numeros y realizar las siguientes validaciones
// 1. El numero1 es igual que el numero2
// 2. El numero1 es diferente que el numero2
// 3. El numero2 es mayor que el numero1
// 4. El numero1 es menor que el numero2
// 5. El numero1 es mayor o igual que el numero2
// 6. El numero2 es menor o igual que el numero1
const numero1 = 15;
const numero2 = 10;

console.log(numero1 === numero2); // false
console.log(numero1 !== numero2); // true
console.log(numero2 > numero1); // false
console.log(numero1 < numero2); // false
console.log(numero1 >= numero2); // true
console.log(numero2 <= numero1); // true
