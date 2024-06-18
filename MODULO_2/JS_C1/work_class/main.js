// Tipos de Datos en JS
// 1. String o Cadenas de Texto
// - "Kambcode"
// - 'Kambcode'
// - 'Mi primera clase de JS'
// - "2024"

// 2. Numerico
// - 10
// - 23
// - 1000000
// - 2024
// - 3.1416
// - 0.00003


// 3. Boleanos
// - true = verdad
// - false = falso


// Variables (var)
// Es la forma de almacenar un dato para modificarlo, utilizarlo o presentarlo

var precio = 19.99
var costoDeEnvio = 10;
var iva = 4;
var precioFinal = precio + costoDeEnvio + iva
var nombreProducto = "Auriculares para juegos"
document.write("<br>El nombre es: ", nombreProducto);
document.write("<br>El precio total del producto es: ", precioFinal);

// Redeclarar Variables
nombreProducto = "auriculares estéreo con cancelación de ruido con micrófono";
document.write("<br>El nuevo nombre es: ", nombreProducto)

// Operar Datos y Operar Variables
var costoTotal = precio + costoDeEnvio // 29.99
document.write("<br>El costo de envio es: ", costoTotal)

var costoTotalX2 = costoTotal * 2 // 29.00 * 2
document.write("<br>El costo de envio * 2 es: ", costoTotalX2)

// RETO:
// Un carrito de mercado, van a crear dos productos, para cada producto crear:
// - primera variables sea el nombre producto
// - segunda sea el precio del producto
// - Creen una variables totalCompra la cual sea la suma de los dos anteriores productos
// y mostrar el resultado en pantalla


var nombreUsuario = prompt("Esto es otra alerta, Porfavor escriba su nombre");
document.write("<br>Bienvenido, tu nombre es: ", nombreUsuario);

prompt("Escriba tu altura en cm")
