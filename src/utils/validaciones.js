export function validarContacto(contacto) {
  if (!contacto.nombre || !contacto.apellido || !contacto.telefono) {
    return 'Complete todos los campos antes de guardar.';
  }

  if (contacto.nombre.length < 2 || contacto.apellido.length < 2) {
    return 'El nombre y el apellido deben tener al menos dos letras.';
  }

  if (!/^[0-9+\-\s()]{7,20}$/.test(contacto.telefono)) {
    return 'Ingrese un teléfono válido.';
  }

  return '';
}
