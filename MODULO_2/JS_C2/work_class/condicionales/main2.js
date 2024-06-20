// Como comparar variables

// Igualdad ==
// Igualdad exacta ===
// Mayor >
// Menor <
// Mayor o igual >=
// Menor o igual <=
// Diferencia !=

// var result = 40 > 35 // true
// var result2 = 40 < 35 // false
// var age = Number(prompt("Digita tu edad")); // 15
// var result3 = age <= 18 // true

// Ejemplos de Igualdad e Igualdad exacta
// == -> Compara los valores sin tener en cuenta los tipos de Datos
// === -> Compara si los valores y los tipos son iguales

// A. Igualdad ==
// 2 == 2 -> True
// "32" == 32 -> True
// 3 == 5 -> False
// "Colombia" == "colombia" -> False

// B. Igualdad exacta ===
// -> "32" === 32 -> False
// -> "Colombia" === "colombia" -> False

// != -> Compara los valores sin tener en cuenta los tipos de Datos
// !== exacta-> Compara si los valores y los tipos son iguales

// Ejemplos de diferencias !=
// -> 32 != "32" -> false
// -> 32 != "45" -> true

// Ejemplos de diferencias exacta !==
// -> 32 !== "45" -> true


// CONDICIONAL IF / ELSE
// Ejercicio: Vamos a crear una pagina, donde diga si un usuario 
// es mayor de edad (< 18), si se cumple nos diga "eres mayor de edad"
// de lo contrario diga "eres menor de edad"

// if(Condicion){
//     Lo que queremos hacer SI SE CUMPLE LA CONDICION
// }

// var age = Number(prompt("Digita tu edad"));
// if(age >= 18){
//     document.write("eres mayor de edad");
// } else{
//     document.write("eres menor de edad");
// }

// RETO:
// 1. Vamos a pedirle a él usuario la nacionalidad, vamos a guardar ese valor 
// en una variable
// 2. Crear una condicion con un if(){}, donde la condicion compare y diga. Si se cumple la condicion
// nos diga "eres colombiano", de lo contrario con un else{}, nos diga "eres de otro pais"

var nacionalidad = (prompt("Digita tu nacionalidad")).toLowerCase(); //Pasar a minuscula
// var nacionalidad = (prompt("Digita tu nacionalidad")).toUpperCase(); // Pasar a mayuscula
// var nacionalidadMinuscula = nacionalidad.toLowerCase() // colombia

if(nacionalidad === "colombia"){
    document.write("Eres colombiano")
} else {
    document.write("Eres de otro pais")
}

var numero1 = Number(prompt("digite 1"))
var numero2 = Number(prompt("digite 2"))