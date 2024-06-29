// Login por medio de condiciones

// const contraseña = prompt("Digita tu contraseña");

// if(contraseña === "kambcode"){
//     document.write("Ingreso valido");
// } else {
//     document.write("Ingreso no Exitoso");
// }

// Login por medio de ciclos
// Ciclo= Un ciclo es algo que se repite apartir de una condicion
// iteracion = Son las veces que se repite el ciclo
// Ciclo while:

// var userPassword = prompt("Contraseña de inicio"); // kambcode

// while(userPassword != "kambcode"){ // false
//     console.log("Acceso Denegado");
//     userPassword = prompt("Vuelve a intentar") // kambcode
// }

// document.write("FIN DEL PROGRAMA")

// Hacer un programa que imprima los numeros del 1 al 100
// Estructura de un ciclo: var inicio -> condicion -> incremento

// let numero = 1;

// while(numero <= 100){ // false
//     document.write("<br>",numero) // 2
//     numero++ // numero = numero + 1 
// }

// RETO:
// Hacer un programa que cuente de 2 en 2 hasta 50 (2, 4, 6... 50)
// Hacer lo mismo de forma decendente (50, 48, 46... 2)

// var i = 2;

// while(i <= 50){
//     document.write("<br>", i)
//     i+=2 // i = i + 2
// }

// var j = 50
// while(j >= 2){ // true
//     document.write("<br>", j)
    // j = j - 2 // j-=2
// }

// Realizar un programa que cuente los numeros del 1 al 50
// Ciclo for:
// for(incio; condicion; incremento){LO QUE PASA SI SE CUMPLRE LA CONDICION}

// var number = 1

// while(number <= 50){
//     document.write("<br>", number)
//     number++
// }

// for(var number = 1; number <= 50; number++){
//     document.write("<br>", number)
// }

// Realizar un programa que haga la tabla del 3
// 3 * 1 = 3
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO
// 3 * 2 = 6
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO
// 3 * 3 = 9
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO
// 3 * 10 = 30
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO


for(var number2 = 1; number2 <= 10; number2++){
    const tableResult = 3 * number2; // 3 * 1 = 3
    // document.write("<br>3 * ", number2, " es igual = ", tableResult);// 3 * 1 es igual = 3
    // for(var count = 1; count <= 3; count++){
    //     document.write("<br>HOLA MUNDO");
    // }
}

// document.write("<br>FIN DEL PROGRAMA")

var name = "kambcode";
var age = 32;

// document.write("hola ", name, " tu edad es: ", age)
// template literals
// Crear cadenas de texto que permite interpolar expresion y variables (con comillas invertidad)
// document.write(`<br>hola ${name} tu edad es: ${age}`);



