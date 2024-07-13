// document.write("Hola mundo")
// const lista = document.getElementById("list-1");

// const addToList = () => {
//     const name = "kambcode"
//     lista.innerHTML += "<li>"+ name + "</li>";
// }

const counterElement = document.getElementById("counter");

let count = 0
counterElement.innerHTML = count

const aumentar = () => {
    count = count + 1
    counterElement.innerHTML = count
}


const disminuir = () => {
    count = count - 1 // count = 0 - 1 = -1
    if(count <= 0){ // -1 <= 0 = true
        count = 0 // 
    }
    counterElement.innerHTML = count
    // if(count > 0){
    //     counterElement.innerHTML -= 1
    // }
}