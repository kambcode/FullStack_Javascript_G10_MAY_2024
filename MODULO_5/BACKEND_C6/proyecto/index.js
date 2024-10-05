// import 'dotenv/config'
// import axios from 'axios'
// Desestructuración de arreglos
// const array = [1, 2, 3, 4, 5]

// const [ segundoNumero, primerNumero ] = array

// console.log('Primero:', primerNumero)
// console.log('Segundo:', segundoNumero)


// const { PORT: puerto, ENV, API_KEY, BASE_URL: baseUrl } = process.env


// if(ENV === 'development') {
//     console.log('Estamos en desarrollo') 
// }else {
//     console.log('Estamos en producción')
//     const {data} = await axios.get(`${baseUrl}/pokemon/1`)
//     console.log(data)
// }



const args = process.argv.slice(2)
console.log(args)

const [nombre, edad ] = args

console.log('Nombre:', nombre)
console.log('Edad:', parseInt(edad))
console.log(parseInt(edad))