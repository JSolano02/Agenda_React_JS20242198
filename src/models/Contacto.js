export default class Contacto {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre.trim();
    this.apellido = apellido.trim();
    this.telefono = telefono.trim();
  }

  coincideCon(texto) {
    const busqueda = texto.toLowerCase();

    return (
      this.nombre.toLowerCase().includes(busqueda) ||
      this.apellido.toLowerCase().includes(busqueda) ||
      this.telefono.toLowerCase().includes(busqueda)
    );
  }
}
