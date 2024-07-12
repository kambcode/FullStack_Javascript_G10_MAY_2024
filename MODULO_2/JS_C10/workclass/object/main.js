// const product = {
//     name: "celular",
//     color: ["negro", "verde", "blanco", "gris"],
//     marca: "iphone",
//     cantidadStock: 150,
//     precio: 5000000,
//     descuento: 10, // 10%
//     disponibleEntregaInmediata: true
// }

// Quiero saber cual es la marca del producto
// console.log("La marca del producto es: ", product.marca)

// reto: si el producto esta disponible para entrega inmediata
// vamos a imprimir "Lo recibiras hoy" si no, 
// vamos a imprimir "Lo recibiras despues"

// if(product.disponibleEntregaInmediata === true){
//     console.log("Lo recibiras hoy")
// } else {
//     console.log("Lo recibiras despues")
// }

// Operaciones con los objetos
// 1. Puedo sobreescribir una propiedad
// product.marca = "xiaomi";
// console.log("Este es todo el objeto: ", product)

// 2. Puedo agregar una propiedad
// product.sePuedeFinanciar = false;
// console.log("Este es todo el objeto: ", product)

// 3. Puedo quitar un propiedad
// delete product.descuento;
// console.log("Este es todo el objeto: ", product)

// ----------------------------------------------------------------------
// Un objeto dog, que va a tener una funcion que se llame saludar

const dog = {
    name: "firulais",
    age: 5,
    color: "negro",
    raza: "criollo",
    estaVacunado: true,
    // saludar: function () { // Funcion Tradicional
    //     console.log("Hola soy firulais")
    // }
    // saludar: () => { // Arrow Funcion
        // console.log("Hola soy firulais")
    // }
}

// console.log("¿Cual es el nombre del perro? ", dog.name);
// console.log("¿Cual es la edad del perro? ", dog.age);
// dog.saludar();

// ----------------------------------------------------------
// Otro ejemplo:

const product = {
    name: "celular",
    identificador: 2323,
    color: ["negro", "verde", "blanco", "gris"],
    marca: "iphone",
    cantidadStock: 150,
    precio: 5000000,
    descuento: 1000000, // 10%
    disponibleEntregaInmediata: true,
    obtenerPrecioTotal: () => {
        const precioTotal = product.precio - product.descuento;
        return precioTotal;
    },
    isColorAvailable: (colorSolicitado) => {
        const colorDisponible = product.color.includes(colorSolicitado);
        return colorDisponible;
    }
}

// const priceTotal = product.obtenerPrecioTotal();
// console.log("El precio Total de nuestro producto es: ", priceTotal);

// const disponibleEnVerde = product.isColorAvailable("verde");
// console.log("¿El producto esta disponible en verde?, ", disponibleEnVerde) // true

// const disponibleEnMorado = product.isColorAvailable("morado");
// console.log("¿El producto esta disponible en morado?, ", disponibleEnMorado) // false


// RETO 2: 
// 1. Crear un objeto que se llame pelicula
// 2. Tiene varias propiedades:
// - nombre
// - añoDeLanzamiento
// - edadMinima
// - funcion que se llame disponibleParaUsuario(edadUsuario) =>  Debe retornar
// si puedo ver la pelicula o no (false || true)

const pelicula = {
    nombre: "Titanic",
    añoDeLanzamiento: 2005,
    edadMinima: 12,
    disponibleParaUsuario: (edadUsuario) => {
        if(edadUsuario >= pelicula.edadMinima){
            console.log("Puedes ver la pelicula")
        } else {
            console.log("No tienes la edad suficiente")
        }
    }
}

const result = pelicula.disponibleParaUsuario(10);


// Objetos dentro de Arreglos
const estudiantes = [
    {nombre: "Camilo", edad: 33, promedio: 10}, // elemento 1
    {nombre: "Juan", edad: 30, promedio: 6}, // elemento 2
    {nombre: "Andres", edad: 29, promedio: 8.7},// elemento 3
]

console.log(estudiantes[0])


