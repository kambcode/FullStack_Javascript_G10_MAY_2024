

// import fs from 'fs';
// CRUD - Create = Crear, Read = Leer, Update = Actualizar, Delete = Borrar

//Crear y sobreescribir
// fs.writeFile('documento.txt', "mundo 2", (error) => {
//     if(error) throw error;
//     console.log('Archivo creado'); 
// })

// Crear y actualizar
// fs.appendFile('documento.txt', "mundo 3", (error) => {
//     if(error) throw error;
//     console.log('Archivo creado');
// })

// crear archivo nuevo, sobreescribir
// fs.open('documento.txt', 'w', (error, file) => {
//     if(error) throw error;
//     console.log('Archivo creado');
// })

// Read
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(data)
// })

// delete 
// fs.unlink('documento.txt', (error) => {
//     if(error) return console.log(error); 
//     console.log('Archivo eliminado');
// })







// import {createReadStream} from 'fs';

// const readStream = createReadStream('file.txt'); 


// readStream.on('readable', () => {
//     setTimeout(() => {
//         const data = readStream.read(10);
//         console.log(data); 
//       }, 10);
// })
// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     console.log(chunk.toString());
// })
// readStream.on('open', () => {
//     console.log('File is open');
// })
// readStream.on('end', () => {
//     console.log('File is finished');
// })

