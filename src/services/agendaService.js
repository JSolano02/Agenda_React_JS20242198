import Contacto from '../models/Contacto.js';

const API_URL = 'http://www.raydelto.org/agenda.php';

export async function obtenerContactos() {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error('No se pudo consultar la agenda.');
  }

  const datos = await respuesta.json();

  return datos.map(
    (item) => new Contacto(item.nombre || '', item.apellido || '', item.telefono || '')
  );
}

export async function guardarContacto(contacto) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: contacto.nombre,
      apellido: contacto.apellido,
      telefono: contacto.telefono
    })
  });

  if (!respuesta.ok) {
    throw new Error('No se pudo guardar el contacto.');
  }

  return true;
}
