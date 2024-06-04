## Media Queries

Hablando del tema del desarrollo responsive, también se menciona otro concepto que es mas enfocado a las buenas practicas y es el desarrollo `Mobile First` el cual se refiere a que siempre debemos desarrollar nuestras aplicaciones primero para dispositivos mobile y luego adaptarlas a que funcionen en pantallas con distribuciones como las de los computadores y televisores, estos primeros tienen pantallas mas pequeñas y requieren de un desarrollo mas especifico. Entremos en el tema y luego miramos los beneficios e implicaciones del `Mobile First` design.

Los media queries son condicionales que podemos utilizar que toman metadata del dispositivo donde se está ejecutando nuestra aplicación y nos prestan información util como el tamaño de la pantalla para así poder usar estos condicionales para aplicar estilos dependiendo del dispositivo donde se esté ejecutando nuestra aplicación.

Miremos un ejemplo de una sentencia que hace uso de media queries

```
@media (max-width: 600px) {
    .title {
        color: green;
    }
}

.title {
    font-size: 100px;
}

```

En este ejemplo tenemos una clase la cual tiene por estilo un font size de 100px, si se cumple la condición de que la pantalla tenga un maximo de 600px el texto también tomará el estilo de color verde.

Estos media queries también los podemos aplicar en el HTML cuando importamos nuestra hoja de estilos de la siguiente manera.

```
<link rel="stylesheet" media="(max-width: 800px)" href="estilosMoviles.css" />
```

En este caso aplicamos esta hoja de estilos solo para pantallas de maximo 800px, que podría interpretarse como que son de moviles.

Los media queries son condicionales que podemos componer de distintos elementos, mirémoslos.

- `Tipos de dispositivos` Los media queries pueden componerse de tipos de dispositivos, miremos algunos de los posibles valores mas utilizados con frecuencia.
  - `all` Aplica para todos los dispositivos
  - `screen` Para referirse a pantallas
- `Caracteristicas de las pantallas`
  - `orientation` Nos permite verificar la orientación del dispositivo de visualización
  - `resolution` Nos permite operar sobre la resolución de la pantalla
  - `width` Operamos con el ancho de la pantalla
  - `height` Operamos con el alto de la pantalla

> Existen muchos mas tipos de dispositivos sobre los cuales se puede hacer query y también muchas mas caracteristicas del dispositivo para ejecutar nuestras media queries, estos solo son los mas comunes y utilizados. Lee sobre mas posibles operadores [**aquí**](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

Con estas operaciones podemos utilizar también operadores lógicos para construir condicionales mas complejos, miremos cuales podemos utilizar y algunos ejemplos.

- `and` Condicional and, nos permite verificar que siempre se cumplan ambas partes del condicional
- `lista separada por comas` Es el operador `or`, cada sentencia separada por coma es un condicional aparte y dado el caso que cualquier se cumpla se aplicarán los estilos definidos
- `not` Operador de negación, nos permite validar que se cumpla lo opuesto de un condicional
- `only` Nos sirve para filtrar que dispositivos pueden usar nuestros estilos, suele ser util para filtrar por ejemplo que navegadores viejos no carguen estilos que podrían hacer la aplicación fallar porque no los soportan

Incluso podemos hacer condicionales anidados, miremos unos cuantos ejemplos.

```
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    .container {
      display: flex;
    }
  }
}
```

En el ejemplo anterior, primero validamos que el dispositivo soporte la propiedad `display: flex` para luego entonces si se cumple, verificar si el dispositivo es una pantalla y tiene un ancho minimo de 900px, si todo esto anterior se cumple, se aplicará un estilo de `display: flex` a los elementos con clase `.container`.

```
@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi){
  body {
    display: flex;
  }
}

@media screen, print {
body {
  line-height: 1.2;
}

```

Este ejemplo anterior nos ilustra la utilización de los operadores lógicos que podemos utilizar para apoyarnos en la construcción de nuestros condicionales, en este ejemplo utilizamos el operador and, las comas y el operador `only`.

Cerremos el tema hablando entonces el tan cotizado `mobile first design`, la pauta clara para aplicarlo de manera correcta mediante el uso de media queries sería entonces diseñando nuestra aplicación primero para moviles, entonces esto implica que nuestros media queries deberían de ser dirigidos a que hacer cuando la pantalla supera las condiciones o caracteristicas de un dispositivo movil, entonces, los media queries deberían utilizar mas frecuentemente el modificar `min` tanto para `min-width` como para `min-heigth` de manera que nuestros estilos por defecto sean los pensados para pantallas pequeñas.

Puedes ampliar tus conocimientos de media queries te recomendamos esta guia:
https://css-tricks.com/a-complete-guide-to-css-media-queries/

Y además en el siguiente enlace puedes ver las media queries usadas para los dispositivos mobiles y desktop mas usados
https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

## Responsive behavior

Es importante resaltar que, en algunos casos, los media Queries no son necesarias para crear un comportamiento responsive. Un enfoque común es crear un diseño de cuadrícula flexible utilizando porcentajes para representar el tamaño de las columnas. Estos porcentajes se pueden calcular fácilmente con la siguiente fórmula:

objetivo/contexto = resultado

Digamos que queremos mostrar un encabezado de 700 px en una pantalla de 988 px de ancho. En este caso, el valor objetivo es 700 y el contexto es 988. Dividir estos dos da el porcentaje de la pantalla que debe ocupar el encabezado.

700/988 = 0,7085

El ancho del encabezado debe ser, por lo tanto, del 70,85 %. Este enfoque se puede aplicar a márgenes, anchos, altos, cualquier cosa. No importa el tamaño del entorno de visualización, estos componentes siempre ocuparán el mismo porcentaje de espacio.

El creciente enfoque en el diseño web receptivo ha llevado al desarrollo de métodos CSS, como Flexbox, Grid Layout y Multi-Column Layout, que están diseñados para responder a entornos cambiantes. Estos son excelentes para incorporar fácilmente la capacidad de respuesta sin el uso de media queries. Cabe señalar que no se trata de un enfoque de todo o nada cuando se trata de CSS frente a consultas de medios. La combinación de consultas de medios con estos métodos CSS más fluidos le brinda un gran control sobre el uso del entorno de visualización al máximo y la creación de la mejor experiencia de usuario posible.

## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `grid` y `media queries` en general vimos los elementos que necesitamos para tener claro como se da un desarrollo responsive y que nos deja sin duda frente a un panorama mucho mas claro en cuanto a buenas practicas para tener desarrollos frontend con un nivel mucho mas productivo. En los siguientes modulos empezaremos a profundizar sobre manejadores de versiones de códigos y profundizaremos mas sobre Javascript y su implementación al desarrollo web.
