
const div = document.querySelector('div');
const boton = document.getElementById('boton');


boton.addEventListener('click',saludar);
boton.addEventListener('click',adios);

// boton.onclick = saludar;
// boton.onclick = adios;



function saludar(){
    alert('hola estoy aqui')
}

function adios(){
    alert('chao')
}

function colores(){
    console.log('entro');
    div.innerHTML = 'esto lo trae el javascript'
    div.style.marginTop = '50px'
    div.style.background = 'aliceblue'
}