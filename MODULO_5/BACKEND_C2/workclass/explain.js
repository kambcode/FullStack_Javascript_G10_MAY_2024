const package = {
    //Nombre del proyecto
    name: "test-name",
    //Versión, siempre debe ir con los 3 apartados separados por puntos
    version: "1.0.0",
    //Descripción del proyecto
    description: "test description",
    //Script de arranque del proyecto, por defecto index.js
    main: "index.js",
    //Scripts del proyecto, aqui podemos definir distintos códigos ejecutados como npm {nombre del script}
    scripts: {
        test: 'echo "Error: no test specified" && exit 1',
        //Script de ejemplo
        ejemplo: "echo test",
    },
    //Palabras clave de nuestro proyecto
    keywords: ["keyword1", "keyword2"],
    //Autor del proyecto
    author: "test author",
    //Licencia del proyecto
    license: "ISC",
    //Dependencias de desarrollo
    devDependencies: {
        nodemon: "^2.0.20",
    },
    //Dependencias globales del proyecto
    dependencies: {
        axios: "^1.3.2",
    },
    //Sintaxis para modulos del proyecto, por defecto CommonJS
    type: "module",
};
