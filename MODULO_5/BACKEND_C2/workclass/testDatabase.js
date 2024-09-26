import axios from "axios";

console.log("Haciendo petición de prueba a base de datos");
const results = await axios.get("https://swapi.dev/api/people/1");

if (results.status === 200) {
    console.log("Base de datos online!");
} else {
    console.log("Error conectando con base de datos");
}
