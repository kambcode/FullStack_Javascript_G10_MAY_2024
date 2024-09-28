import axios from 'axios';

// callback, promise, async/await

const apiUrl = 'https://jsonplaceholder.typicode.com/postsdsd';
const apiUrl2 = 'https://jsonplaceholder.typicode.com/comments';
const apiUrl3 = 'https://jsonplaceholder.typicode.com/albums23';

// async awat

// const response = await axios.get(apiUrl)

// console.log(response.data[0]);

const response = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response.data[0]);
    } catch (error) {
        console.log("error", error.message);
    }   
}

response(apiUrl);
response(apiUrl2);
response(apiUrl3);

// promesas Concurrentes 
// const promesa1 = axios.get(apiUrl);
// const promesa2 = axios.get(apiUrl2);
// const promesa3 = axios.get(apiUrl3);

// console.log("Promesas Concurrentes", [promesa1, promesa2, promesa3]);

// Promise.all([promesa1, promesa2, promesa3]).then((response) => response.map((res) => console.log(res.data[0])));
// Promise.allSettled([promesa1, promesa2, promesa3]).then((response) => response.map((res) => console.log(res.status)));
// Promise.any([promesa1, promesa2, promesa3]).then((response) => console.log(response.data[0]));
// Promise.race([promesa1, promesa2, promesa3]).then((response) => response.map((res) => console.log(res.data[0])));

// promesas

// const funciono = (response) => console.log("funciono", response.data[0]);
// const noFunciono = (error) => console.log("error", error.message);

// console.log(axios.get(apiUrl).then(funciono, noFunciono));
// console.log(axios.get(apiUrl).then(funciono).catch(noFunciono));

// axios.get(apiUrl).then((response) => console.log(response.data[0]));


// console.log(response);



// function primeraTarea(callback) {
//     setTimeout(() => {
//         console.log("Primera tarea completada");
//         callback();
//     }, 1000);
// }

// function segundaTarea(callback) {
//     setTimeout(() => {
//         console.log("Segunda tarea completada");
//         callback();
//     }, 1000);
// }

// function terceraTarea(callback) {
//     setTimeout(() => {
//         console.log("Tercera tarea completada");
//         callback();
//     }, 1000);
// }

// // Callback hell
// primeraTarea(() => {
//     segundaTarea(() => {
//         terceraTarea(() => {
//             console.log("Todas las tareas completadas");
//         });
//     });
// });

// Promesas

