// var VS let
// El uso del var dentro de una empresa, es practicamente prohibido

// const = No podemos reasignar ni redeclarar
// var = La podemos redeclarar y reasignar
// let = podemos reasignar valores

// Ejemplo var
var age = 21
var name = "Jorge"
// document.write("Hola ", name, "tienes ", age)
var age = 35 // redeclarando una variable age
// document.write("<br>",age)

age = 28 // reasignando un nuevo valor a variable age
// document.write("<br>",age)

// Ejemplo let
// let suma = 120000 
// suma = "Hola mundo" // reasignando un nuevo valor a suma
// document.write(suma) // 



// SCOPE: En programacion scope(ò ambito) se refiere al contexto dentro 
// del cual se puede acceder a variables y funciones

// Local scope: Cuando puede ser accedida solamente a una parte del codigo

// Gobal scope: Puede ser accedida desde cualquier parte del codigo

// Block scope

// Ejemplo local scope:

let age2 = 23

if(true){
    let dobleedad = age2 * 2 // local scope
    document.write("El doble de tu edad es: ", dobleedad) // 46
}
// document.write("El doble de tu edad es: ", dobleedad)


// Ejemplo gobal scope: 
let age3 = 23 // global scope

if(true){
    let dobleedad2 = age3 * 2 // 46
    document.write("El doble de tu edad es: ", age3) // 46
}
document.write("El doble de tu edad es: ", age3) // 

// Ejemplo block scope:
{
    let saludo = "hola"
    document.write(saludo) // hola
}













