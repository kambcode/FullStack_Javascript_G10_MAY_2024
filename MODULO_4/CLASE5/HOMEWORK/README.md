## Tarea: Implementar login en el proyecto de rick and morty

## OPCIONAL

### Explicación:
En esta tarea vamos a practicar los eventos onClick onSubmit y onChange y vamos a aplicar algunos de los conceptos vistos en clase con el login sin usar el router



1. Vamos a crear un formulario con dos campos
    usuario
    password

````javascript
<form action="">
            <input type="text" placeholder='nombre usuario'/>
            <input type="password" placeholder='contrasena'/>
            <button>Iniciar Sesion</button>
</form>
````

2. crear variables de estado donde almacenar los valores de los input
````javascript

const [name, setName] = useState('');

````
3. agregarle la validacion a cada input

4. por ultimo crear un componente Home y desde el componente home recibira una props y con ella poder mostrar el nombre del usuario

