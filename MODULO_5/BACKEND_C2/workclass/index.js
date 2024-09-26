import axios from "axios";

console.log("Haciendo petición a base de datos");
const results = await axios.get("https://swapi.dev/api/people/1");
console.log("Terminando petición, pasando a imprimir resultado");
console.log(results.data);
