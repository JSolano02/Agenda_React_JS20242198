function ListadoContactos({ contactos, total, busqueda, onCambiarBusqueda, cargando, onActualizar }) {
  return (
    <section className="listado">
      <div className="barra-listado">
        <div>
          <h2>Contactos guardados</h2>
          <p>{cargando ? 'Cargando contactos...' : `${total} contactos registrados`}</p>
        </div>

        <div className="acciones-listado">
          <input
            className="buscar"
            type="search"
            placeholder="Buscar contacto"
            value={busqueda}
            onChange={(evento) => onCambiarBusqueda(evento.target.value)}
          />

          <button className="boton-secundario" type="button" onClick={onActualizar} disabled={cargando}>
            Actualizar
          </button>
        </div>
      </div>

      <div className="tabla-contenedor">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr>
                <td className="vacio" colSpan="3">Buscando contactos guardados...</td>
              </tr>
            ) : contactos.length === 0 ? (
              <tr>
                <td className="vacio" colSpan="3">No se encontraron contactos.</td>
              </tr>
            ) : (
              contactos.map((contacto, indice) => (
                <tr key={`${contacto.nombre}-${contacto.apellido}-${contacto.telefono}-${indice}`}>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.apellido}</td>
                  <td>{contacto.telefono}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ListadoContactos;
