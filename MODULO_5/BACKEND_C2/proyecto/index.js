import axios from 'axios'

console.log('realizando peticion')
const results = await axios.get("https://swapi.dev/api/people/3");
console.log(results.data)
