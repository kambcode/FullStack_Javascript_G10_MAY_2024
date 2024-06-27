const numberA = Number(prompt("Digita un número"));
const numberB = Number(prompt("Digita otro número a operar"));
const operacion = (prompt("Digita alguna de las siguientes operaciones (suma, resta, multiplicacion o division)")).toLowerCase();

const resta = numberA - numberB;
const multiplicacion = numberA * numberB;
const division = numberA / numberB;

if(operacion === "suma"){
    const suma = numberA + numberB;
    document.write(`<br> El primer numero es: ${numberA} <br> Tu numero 2 es:  numberB`)
    document.write("<br>Tu resultado es: ", suma);
} else if(operacion === "resta"){
    document.write("<br> El primer numero es: ", numberA, "<br> Tu numero 2 es: ", numberB)
    document.write("<br>Tu resultado es: ", resta);
} else if(operacion === "multiplicacion"){
    document.write("<br> El primer numero es: ", numberA, "<br> Tu numero 2 es: ", numberB)
    document.write("<br>Tu resultado es: ", multiplicacion);
} else if(operacion === "division"){
    document.write("<br> El primer numero es: ", numberA, "<br> Tu numero 2 es: ", numberB)
    document.write("<br>Tu resultado es: ", division);
} else {
    document.write("Coloca una operacion permitida");
}