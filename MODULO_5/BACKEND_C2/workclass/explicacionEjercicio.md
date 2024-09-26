# Ejercicio NodeJS

## Descripción proyecto

En este proyecto, tenemos un ejemplo basico de algunos paquetes usados muy a menudo, instalación de dependencias de desarrollo y configuración de scripts para ejecución mediante el package.json.

Miremos como se construyó el proyecto.

-   Primero configuramos temas del package.json según se explica en `explain.js`
-   Luego instalamos las dependencias, para instalar `nodemon` como dependencia de desarrollo utilizamos el siguiente comando
    ```
    npm install --save-dev nodemon
    ```
    
    > Nodemon es una librería la cual nos habilita el comando `nodemon` el cual le pasamos la ruta de un archivo el cual escucha de manera que cada que guardamos cambios se vuelve a ejecutar, esto sirve mucho para cuando trabajamos con servidores por ejemplo. Este es su uso principal pero por supuesto tienes muchos mas super utiles.
    
-   Luego instalamos axios como dependencia global con el siguiente comando
    ```
    npm install axios
    ```
-   Luego configuramos un comando para ejecutar nuestro archivo `index.js` con el listener de nodemon `nodemon index.js`, este comando lo llamamos `watcher`
-   Finalmente configuramos un ultimo comando para ejecutar nuestro archivo `testDatabase.js` el cual hace una petición a un origen y si este responde bien retorna ok, a este comando lo llamamos `test-database`

-   Para ejecutar los script ejecutamos el comando `npm run {scriptName}`, por ejemplo para el `watcher` sería `npm run watcher`, intentalo con el de test-database!.
