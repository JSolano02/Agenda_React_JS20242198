import { useEffect, useMemo, useState } from 'react';
import FormularioContacto from './components/FormularioContacto.jsx';
import ListadoContactos from './components/ListadoContactos.jsx';
import Contacto from './models/Contacto.js';
import { obtenerContactos, guardarContacto } from './services/agendaService.js';
import { validarContacto } from './utils/validaciones.js';

function App() {
  const [contactos, setContactos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  const [cargando, setCargando] = useState(false);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    cargarContactos();
  }, []);

  async function cargarContactos() {
    setCargando(true);
    setMensaje('');

    try {
      const lista = await obtenerContactos();
      setContactos(lista);
    } catch (error) {
      setMensaje(error.message);
      setTipoMensaje('error');
    } finally {
      setCargando(false);
    }
  }

  async function agregarContacto(datosFormulario) {
    const contacto = new Contacto(
      datosFormulario.nombre,
      datosFormulario.apellido,
      datosFormulario.telefono
    );

    const error = validarContacto(contacto);

    if (error) {
      setMensaje(error);
      setTipoMensaje('error');
      return false;
    }

    setGuardando(true);
    setMensaje('');

    try {
      await guardarContacto(contacto);
      setMensaje('Contacto guardado correctamente.');
      setTipoMensaje('exito');
      await cargarContactos();
      return true;
    } catch (error) {
      setMensaje(error.message);
      setTipoMensaje('error');
      return false;
    } finally {
      setGuardando(false);
    }
  }

  const contactosFiltrados = useMemo(() => {
    const texto = busqueda.trim();

    if (!texto) {
      return contactos;
    }

    return contactos.filter((contacto) => contacto.coincideCon(texto));
  }, [contactos, busqueda]);

  return (
    <main className="contenedor">
      <section className="encabezado">
        <div>
          <span className="etiqueta">Tarea 4</span>
          <h1>Agenda React</h1>
          <p>Registro de contactos usando componentes de React.</p>
        </div>
      </section>

      <FormularioContacto onAgregarContacto={agregarContacto} guardando={guardando} />

      {mensaje && <div className={`mensaje ${tipoMensaje}`}>{mensaje}</div>}

      <ListadoContactos
        contactos={contactosFiltrados}
        total={contactos.length}
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
        cargando={cargando}
        onActualizar={cargarContactos}
      />
    </main>
  );
}

export default App;
