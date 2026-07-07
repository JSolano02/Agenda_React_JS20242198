import { useState } from 'react';

function FormularioContacto({ onAgregarContacto, guardando }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  async function manejarEnvio(evento) {
    evento.preventDefault();

    const seGuardo = await onAgregarContacto({ nombre, apellido, telefono });

    if (seGuardo) {
      setNombre('');
      setApellido('');
      setTelefono('');
    }
  }

  return (
    <section className="panel">
      <div className="formulario-titulo">
        <h2>Nuevo contacto</h2>
        <span>{guardando ? 'Guardando...' : ''}</span>
      </div>

      <form className="formulario" onSubmit={manejarEnvio} autoComplete="off">
        <div className="grupo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ej. Carlos"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            type="text"
            placeholder="Ej. Rodríguez"
            value={apellido}
            onChange={(evento) => setApellido(evento.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            type="tel"
            placeholder="Ej. 809-555-1234"
            value={telefono}
            onChange={(evento) => setTelefono(evento.target.value)}
          />
        </div>

        <button className="boton-principal" type="submit" disabled={guardando}>
          {guardando ? 'Guardando...' : 'Guardar contacto'}
        </button>
      </form>
    </section>
  );
}

export default FormularioContacto;
