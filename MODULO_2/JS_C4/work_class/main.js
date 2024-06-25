// REPASO SEMANA PASADA
// 12
// "daniel"
// true || false

// var precioProducto = 200000;
// document.write(precioProducto) // 200000
// precioProducto = 150000;

// document.write(precioProducto) // 150000
 
// const name = "kambcode";
// name = "Jorge";

// AND &&
// OR ||
// const usuario = "daniel@gmail.com"
// const contraseña = "daniel123"
// const constraeñaDigitada = prompt("Digita tu contraseña")
// const usuarioDigitado = prompt("Digita tu correo")

// if(constraeñaDigitada === contraseña || usuario === usuarioDigitado){
//     document.write("inicio de sesion exitoso")
// } else{
//     document.write("inicio de sesion no exitoso")
// }


// if / else if / else

// Programa que el usuario escriba su nacinalidad y decir un mensaje que diga
// "eres de ***"

// var country = (prompt("Escribe el pais de nacimiento")).toLowerCase();

// if(country === "colombia"){ // TRUE
//     document.write("Eres colombiano")
// }
// if(country === "panama"){ // false
//     document.write("Eres panameño")
// }

// if(country === "venezuela"){ // false
//     document.write("Eres venezolano")
// }

// if(country === "peru"){ // false
//     document.write("Eres peruano")
// }

// document.write("<br> FIN")

// De la forma más eficiente de resolver este mismo ejercicio es utilizando else if
// if(){} // Solamente lo colocamos una sola vez en el programa
// else if(){} // Puedo colocarlo cuantas veces queramos en el programa
// else {} // Solamente lo colocamos una sola vez en el programa

// var country = (prompt("Escribe el pais de nacimiento")).toLowerCase(); // panama

// if(country === "colombia"){ // false
//     document.write("Eres de Colombia")
// } else if (country === "panama"){ // true
//     document.write("Eres de Panama")
// } else if (country === "venezuela"){ // false
//     document.write("Eres de Venezuela")
// } else if (country === "peru"){ // false
//     document.write("Eres de Peru")
// } else {
//     document.write("No eres de ningún pais registrado en el sistema")
// }

// document.write("<br> FIN");

// RETO 1: 
// UN programa que calcule el precio de entrada a un bar
// Tiene que preguntar el genero de la persona (male / female)
// Preguntar la edad

// Los menores de 18 años (sean hombres o mujeres) -> NO PUEDEN INGRESAR
// Las mujeres siempre entran gratis
// Los mayores de 18 años -> Pagan un cover de $20.000

// const genre = prompt("Digita tu genero (male / female)"); // male
// const age = Number(prompt("Digita tu edad"));

// if(age < 18 && (genre === "male" || genre === "female")){
//     document.write("No puedes entrar")
// } else if (age >= 18 && genre === "female"){
//     document.write("Ingresa gratis")
// } else if (age >= 18 && genre === "male"){
//     document.write("El cover te vale $20.000")
// }

// if(age < 18){
//     document.write("No puedes ingresar")
// } else if(genre === "female"){
//     document.write("Ingresas Gratis")
// } else {
//     document.write("El cover te vale $20.000")
// }

// RETO 2:
// Crear un programa que pida a él usuario un color de camiseta y una talla (S, M, L, XL)
// El progrma debe decirle a él usuario cuantas camisetas hay disponibles
// De acuerdo a la siguiente tabla

// azules de talla L -> 4 camisetas
// azules de talla M -> 10 camisetas
// azules de talla S -> 6 camisetas
// amarillas de talla M -> 8 camisetas
// verde de talla S -> 2 camisetas
// de los demás colores y talas no hay

// const size = (prompt("Escribe la talla de la camiseta")).toLowerCase();
// const color = (prompt("Escribe el color")).toLowerCase();

// if(color === "azul" && size === "l"){
//     document.write("Hay 4 camisetas disponibles")
// } else if(color === "azul" && size === "m"){
//     document.write("Hay 10 camisetas disponibles")
// } else if(color === "azul" && size === "s"){
//     document.write("Hay 6 camisetas disponibles")
// } else if(color === "amarillo" && size === "m"){
//     document.write("Hay 8 camisetas disponibles")
// } else if(color === "verde" && size === "s"){
//     document.write("Hay 2 camisetas disponibles")
// } else {
//     document.write("De los demás colores y tallas no hay disponibles")
// }

// Escribe un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular 
// de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al 
// usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede 
// entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.

const edad = Number(prompt("Digita tu edad"));

if(edad < 4){
    document.write("Puedes ingresar gratis")
} else if(edad <= 18){
    document.write("Debes pagar 5€")
} else {
    document.write("Debes pagar 10€")
}
