var age = 58;
var middleAge = age / 3;
document.write("La tercera parte de tu edad es: ", middleAge.toFixed());

// COHERSION DE DATOS
var fullName = "Daniel " + "Cañon"
document.write("<br>",fullName)
var year = "20" + 24 // 2024
document.write("<br>",year)


// Utilidad Number()
// var userAge = Number(prompt("Escriba su edad")); // "35"
// var userAgePlusTen = userAge + 10; // 35 + 10 = 45
// document.write("<br> Tu edad más 10 años es: ", userAgePlusTen);

// parseFloat() = Ignora los datos tipo String y solamente devuelve datos numericos con decimales
// var pesoKg = parseFloat(prompt("Digita tu peso en kg")); //
// document.write("<br>",pesoKg);

// parseInt() = Nos devuelve el numero, ignorando los decimales, solamente deja un numero entero
var pesoKg = parseInt(prompt("Digita tu peso en kg")); // 58.8
document.write("<br>", pesoKg);