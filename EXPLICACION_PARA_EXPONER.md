# Explicación para exponer

Este proyecto es una agenda de contactos hecha con React. La aplicación permite consultar contactos, agregar nuevos contactos y buscar dentro del listado.

La parte más importante es el componente `App.jsx`, porque funciona como componente padre. En ese componente se guarda el estado principal de la aplicación, como la lista de contactos, el texto de búsqueda, el mensaje de error o éxito y los estados de carga.

Dentro del componente padre hay dos componentes hijos:

1. `FormularioContacto.jsx`: se encarga de mostrar el formulario para escribir nombre, apellido y teléfono. Cuando el usuario presiona guardar, el formulario envía los datos al componente padre.

2. `ListadoContactos.jsx`: se encarga de mostrar la tabla con los contactos guardados. También tiene el campo de búsqueda y el botón para actualizar.

La conexión con la agenda externa se hace en `agendaService.js`. Ahí se usa `fetch` para traer los contactos con GET y para guardar un contacto con POST.

También se usa una clase llamada `Contacto`, que representa cada contacto con nombre, apellido y teléfono. Esa clase tiene un método llamado `coincideCon`, que sirve para buscar contactos.

Antes de guardar un contacto, el proyecto usa `validarContacto`, que revisa que los campos no estén vacíos y que el teléfono tenga un formato válido.

En resumen, el proyecto cumple con la tarea porque usa React, tiene un componente para agregar contactos, tiene un componente para mostrar el listado y ambos están contenidos dentro de un componente padre.
