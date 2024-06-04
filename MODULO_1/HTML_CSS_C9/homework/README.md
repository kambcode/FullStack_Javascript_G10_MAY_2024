# Tareas del modulo

Las tareas de los módulos son pensadas para profundizar en los temas expuestos e interiorizar más el conocimiento.

## Tareas

Aplica los estilos dados según las condiciones especificadas de manera de llegar a la imagen ejemplo, recuerda que en cuanto a estilos hay infinitas maneras de llegar a la misma solución:

1. Utilizando media queries y flexbox genera un menu responsive que se vea como el siguiente:
   - [mediaqueries_homework.webm](./../resources/mediaqueries_homework.webm)
   
   - [mediaqueries_homework.webm](https://github.com/kambcode/FullStack_Javascript_G1_2023_06_26/assets/137812574/ec4e36d3-d37a-4cda-bad7-f868d595f106)

   - Puedes utilizar 720px como breakpoint

2. Ahora vamos a replicar el banner principal de la página de kambcode, para ello crea un componente que en escritorio se vea de la siguiente forma 
   - ![desktop.png](./../resources/kambcode_landing_desktop.png)

   - y en versiones de tablet y celular (es decir en pantallas con un ancho menor a 1280px) se vea así: ![mobile.png](./../resources/kambcode_landing_mobile.png)

   - Nota que no solo cambia el color de la fuente entre una version y otra, sino que todos los textos tambien se ven más pequeños en la versión mobile, al igual que el logo de kambcode tambien es diferente.

   - Recuerda que puedes ocultar un elemento de el HTML con la propiedad `display: none;` y hacerlo visible nuevamente con `display: block;`

A continuación encontrarás las URL de las imágenes que vas a necesitar para desarollar esta tarea:

- Logo a color: https://www.kambcodelatam.com/_next/static/media/logo_small.2e076dcb.svg
- Logo Blanco: https://www.kambcodelatam.com/_next/static/media/logo_mobile.11bb07f0.svg
- Imagen de background: https://www.kambcodelatam.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc1phkeakdkp0%2F3I9hyo1ifgCGz7amYDKs0E%2F98090777fa719f047b35d57ff8e39342%2FManPortrait.png&w=1920&q=75

Si quieres que la imagen de background se vea con una capa de color azul igual a como está el diseño, entonces, agregar el siguiente estilo 
`background-image: linear-gradient(90deg, rgba(255, 255, 255),  rgba(6, 48, 184, 0.50)), url("<URL_DE_LA_IMAGEN>");`. Investiga sobre gradientes en CSS3 para entender cómo funciona esto https://www.w3schools.com/css/css3_gradients.asp

No olvides usar `background-size: cover;` para que la imagen de fondo se ajuste automaticamente.

En mobile el estilo del background será: `background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5),  rgba(6, 48, 184, 0.50)), url("<URL_DE_LA_IMAGEN>");`

