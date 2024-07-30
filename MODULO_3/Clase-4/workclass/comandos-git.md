### Comandos Git

- `git init`: Inicializa un nuevo repositorio Git en el directorio actual.
- `git add .`: Agrega todos los archivos modificados y nuevos al área de preparación (staged changes).
- `git commit -m "Initial commit"`: Crea un nuevo commit con los cambios en el área de preparación y el mensaje especificado.
- `git remote add origin url_branch`: Asocia un alias ("origin") a la URL del repositorio remoto.
- `git push -u origin remote_branch`: Envía los commits locales al repositorio remoto en la rama especificada, estableciendo la conexión entre la rama local y remota. Si la rama no
esta creada, la bandera -u publicará la rama en el repositorio remoto.
- `git push origin remote_branch`: Envía los commits locales al repositorio remoto en la rama especificada.
- `git clone url_repository`: Clona un repositorio remoto en un nuevo directorio local.
- `git pull origin remote_branch`: Obtiene los cambios desde el repositorio remoto y los fusiona en la rama actual.
- `git log`: Nos permite ver el historial de commits del repositorio desde su creación.
- `git log rama1..rama2`: Nos permite ver el historial de commits de una rama en especifico, que en este caso es la rama 'rama2'.
- `git reset id_commit`: Elimina commits del historial desde un commit en especifico (no incluido) en adelante.
- `git revert`: Revierte los cambios hechos en un commit en especifico y crea un nuevo commit con la reversion de esos cambios.
- `git reflog`: Permite ver un historial detallado de cada comando git ejecutado desde la creación del repositorio.