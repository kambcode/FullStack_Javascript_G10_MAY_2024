# Tareas del módulo

Las tareas de los módulos son pensadas para profundizar en los temas expuestos e interiorizar más el conocimiento. 

## Tarea

1. Crea un objeto llamado `serie` cuyos atributos son:  
    - **titulo**  string
    - **numero de temporadas** number
    - **genero** string
    - **creador** string
    - **año de lanzamiento** number

2. **Acceso y modificación básica de datos con arrays y objetos:** Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes, Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio. Ejemplo
    ```javascript
      const estudiantes = [
          { nombre: "Camilo", edad: 33, promedio: 10 },
          { nombre: "Juan", edad: 30, promedio: 6 },
          { nombre: "Andres", edad: 29, promedio: 8.7 },
     ];
    ```
    - Imprime en la consola los datos de el primer estudiante (Posición 0 de el array)
    - Imprime en la consola el nombre del segundo estudiante.
    - Actualiza la edad del primer estudiante a 25 años.
    - Imprime en la consola la información completa del primer estudiante después de la actualización.

3. Utilizando un bucle for crea un programa que recorra el array de el punto 2 y muestre en pantalla los nombres de los estudiantes 
    
    ```javascript
        const totalEstudiantes = estudaintes.lenght; // 3
        for (let i = 0; i < totalEstudiantes; i++) {
            // PENDIENTE: imprimir el nombre de cada estudiante usando el for y la variable i
        }
    ```
4. Crea un objeto llamado `persona` cuyos atributos son:  
    - **nombre**  string
    - **edad** number
    - **peso** string
    - **altura** string
    - **calcularImc** función que retorne el IMC recuerda que `IMC = peso / (altura*altura)`
    - **esMayorDeEdad** función que retorna true / false dependiendo de si la edad de la persona es mayor a 18 años o no
   
### RETO: 
 Utilizando un bucle for, calcula la suma de las edades de todos los estudiantes en el array que usaste en el punto 2.
    - Una vez tengas la suma de todas las edades, calcula el promedio de edad de los estudiantes.
    - Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
