// document.write("Hola mundo");

const parrafo = document.getElementById("text-1")


function changeText () {
    const inputText = document.getElementById("inputTexto").value;
    parrafo.innerHTML = inputText;
}

