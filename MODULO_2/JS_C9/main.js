// const numero = Number(prompt("Digita un numero")); // 21

// if(numero > 0){ // true
//     document.write("El numero es positivo")
// } else if(numero === 0){
//     document.write("El numero es cero")
// } else {
//     document.write("El numero es negativo")
// }

// if(numero > 0){ // true
//     document.write("El numero es positivo")
// } 

// if(numero === 0){ // false
//     document.write("El numero es cero")
// } 

// if (numero < 0) { // false
//     document.write("El numero es negativo")
// }


// Si el usuario es menor o igual a 4 años paga $5; si tiene 3 y 18 años paga $10; mayores de 18 años 
// pagan $15

// let age = Number(prompt("Digita tu edad")); // 3
// if(age <= 4){ // true 
//     document.write("Vas a pagar $5")
// } else if(age >= 3 && age <= 18){
//     document.write("Vas a pagar $10")
// } else {
//     document.write("Vas a pagar $15")
// }

// // Sin ahorran recursos
// if(age <= 4){ // true 
//     document.write("Vas a pagar $5")
// }

// if(age >= 3 && age <= 18){ // true
//     document.write("Vas a pagar $10")
// }

// if(age > 18){ // false
//     document.write("Vas a pagar $15")
// }

//-------------------------------------------------------------
// Segundo Ejercicio

// const num1 = Number(prompt("Digita un numero"));
// const num2 = Number(prompt("Digita otro numero"));

// if(num1 > num2){
//     document.write(`${num1} es mayor que ${num2}`)
// } else if(num1 < num2){
//     document.write(`${num2} es mayor que ${num1}`)
// } else {
//     document.write(`Los numeros son iguales`)
// }

// Ejercicio ciclo 
// 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 === 110
// let suma = 0;

// for(let i = 2; i <= 20; i = i + 2){
//     suma = suma + i; // suma = 0 + 2 = 2
// }

// document.write(suma);


// ---------------------------------------------------------------------------
// Ejercicio Array
// let myArray = [1, 2, 3, 4, 5]; //
// let invertido = [];

// let n = 1
// while(n <= myArray.length){
//     invertido.push(myArray[myArray.length - n]);
//     n++
// }

// document.write(invertido);
// -----------------------------------
// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray)
// let newArray = [];

// for(let i = myArray.length - 1; i >= 0; i--){
//     newArray.push(myArray[i])
// }

// console.log(newArray);

// Apartir de un arreglo, generar la suma de los numeros de este arreglo y mostrar el resultado
// let array = [1, 2, 3, 4, 5]
// let suma = 0;

// for(let i = 0; i <= 4; i++){
//     suma = suma + array[i]
// }

// console.log(suma)

// Otra manera de recorrer arreglos

// let array = [1, 2, 3, 4, 5]
// let suma = 0;

// for(const num of array){
//     suma = suma + num;
// }

// console.log(suma)

// ------------------------------------------
function calcularAreaCirculo (radio){
    const area = Math.PI * Math.pow(radio, 2)
    return area
}


const radio = 5
const area = calcularAreaCirculo(radio);

console.log(`El area del circulo ${radio} es: ${area}`)
console.log(Math.pow(3, 2))







