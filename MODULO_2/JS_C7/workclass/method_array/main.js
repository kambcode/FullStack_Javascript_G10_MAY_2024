// Utilidades de los arreglos
// 1. Como saber cuantos elementos tiene un arreglo .length
let shoppingList = ["leche", "pan", "arroz", "lentejas", "frijoles"]
// console.log("Mi lista de compras", shoppingList);
// console.log("Cantidad de elementos en la lista de compras", shoppingList.length);

// 2. Para agregar elementos a un arreglo usamos el metodo .push()
shoppingList.push("uvas");
shoppingList.push("queso", "cafe", "naranjas");
// console.log("nuevo arreglo de compras", shoppingList);

// 3. Podemos consultar un elemento de la lista en particular
const todoList = ["hacer la tarea", "lavarme los dientes", "dormir"]
// El arreglo tiene 3 elementos; posiciones iniciamos desde 0
// console.log("Cantidad de elementos en todoList", todoList.length)
// console.log("Primer elemento de todoList", todoList[0]); "hacer la tarea"
// console.log("Segundo elemento de todoList", todoList[1]); "lavarme los dientes"
// console.log("Tercer elemento de todoList", todoList[2]); "dormir"
// console.log("Cuarto elemento de todoList", todoList[3]); "undefined"

// 4. Podemos reemplazar un elemento de un array
todoList[1] = "acostarme"
// console.log("Nuevo arreglo", todoList);

// 5. Podemos saber si el arreglo incluye o no un elemento .includes()

console.log("Dentro del arreglo esta dormir?", todoList.includes("dormir")) // true
console.log("Dentro del arreglo esta peinarme?", todoList.includes("peinarme")) // false

