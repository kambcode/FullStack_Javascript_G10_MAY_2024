// const validacion = 5

// if(validacion === 2){
//     console.log('es dos')
// }else if(validacion === 4){
//     console.log('es cuatro')
// }else {
//     console.log('no se que es')
// }

// Validacion es la variable que recibe switch para crear sus casos de uso
// switch(validacion){
//     case 1:
//         console.log('es uno')
//         break
//     case 3:
//         console.log('es un 3')
//         break
//     default: 
//         console.log('no se que valor es')
// }

// const array = ['manzana', 'pera', 'mango']
// console.log(array)
// array.push('guanabana')
// console.log(array)
// array.pop()
// console.log(array)

// const objeto = {
//     // llave : 'valor'
//     nombre: 'daniel',
//     apellido: 'lopez',
//     edad: 29
// }
// console.log(objeto)
// objeto.cedula = 23124341
// console.log(objeto)
// objeto.edad = 15
// console.log(objeto)

//ciclos
let array = ['U','N','I','V','E','R','S','O']
// ciclo for
// for(let index = 0; index < array.length; index++){
//     const element = array[index]
//     console.log(element)
// }

// ciclo while
// let position = 0
// while(position < array.length){
//     const element = array[position]
//     console.log(element)
//     position += 1 
// }

// const numeros = [2,5,7,1,3,4]

// const nuevoArreglo = []
// for(let numero of numeros){
//     nuevoArreglo.push(numero * 2)
// }

// const nuevoArreglo = numeros.map((numero) => numero * 2)

// const nuevosNumero = numeros.map((numero) => {
//     if(numero % 2 === 0) return numero * 2
//     else return numero * 3
// })
// console.log(nuevosNumero)

// const estudiantes = [
//     { nombre: "Sultano", nota: 3.0 },
//     { nombre: "Perano", nota: 2.9 },
//     { nombre: "Mandano", nota: 3.7 },
//     { nombre: "Mendano", nota: 3.9 },
//     { nombre: "Multano", nota: 4.2 },
//     { nombre: "Pepe", nota: 4.3 },
//     { nombre: "Pedrito", nota: 4.7 },
//     { nombre: "Ricardito", nota: 2.1 },
//     { nombre: "Fulano", nota: 1.9 },
//     { nombre: "Isabelita", nota: 5.0 },
//     { nombre: "Laurita", nota: 4.0 },
// ];
// const estudiantesAprueban = estudiantes.filter((estudiante) => estudiante.nota >= 3.0)
// console.log(estudiantesAprueban)

// const amigos = [
//     { nombre: "Sebas", profesion: "DJ" },
//     { nombre: "Andrés", profesion: "Abogado" },
//     { nombre: "Pedrito", profesion: "Artista" },
//     { nombre: "Cata", profesion: "Ingeniera" },
//     ];

// const hayMedico = amigos.some((amigo) => amigo.profesion === 'Medico')
// console.log(hayMedico)

const numeros = [2,5,7,8,3]

const sumeNumeros = numeros.reduce((acumulado, numero) => acumulado + numero)

console.log(sumeNumeros)