const lista = []

for(let i = 1; i <= 5; i++){
    let producto = prompt("Digita un producto")
    if(lista.includes(producto)){
        alert("Error: Este elementos ya esta en la lista de compras")
        i = i - 1 
    } else {
        lista.push(producto);
    }
}

console.log(lista);