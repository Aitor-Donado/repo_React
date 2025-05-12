import { useEffect, useState } from "react";
import TablaMensajes from "./TablaMensajes";
import MensajeForm from "./components/MensajeForm";

function Mensajero() {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeEditando, setMensajeEditando] = useState(null);

  // Cargar todos los mensajes desde la API
  const cargarMensajes = () => {
    setCargando(true);
    fetch("https://aitor.alwaysdata.net/listado")
      .then((response) => response.json())
      .then((data) => {
        setMensajes(data.listado || []);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener los mensajes:", error);
        setCargando(false);
      });
  };

  // Obtener un mensaje específico por ID para edición
  const editarMensaje = (id) => {
    fetch(`https://aitor.alwaysdata.net/listado/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMensajeEditando(data); // Asegúrate de que tu API devuelve { mensaje: ... }
        console.log("Mensaje a editar:", data);
      })
      .catch((error) => {
        console.error("Error al obtener el mensaje:", error);
      });
  };

  // Borrar mensaje por ID
  const borrarMensaje = (id) => {
    fetch(`https://aitor.alwaysdata.net/listado/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        cargarMensajes(); // Recargar lista tras eliminar
      })
      .catch((error) => {
        console.error("Error al borrar el mensaje:", error);
      });
  };

  // Cargar mensajes al inicio
  useEffect(() => {
    cargarMensajes();
  }, []);

  // Función a llamar cuando se crea o edita un mensaje
  const handleNewMessage = () => {
    setMensajeEditando(null); // Salir del modo edición
    cargarMensajes(); // Recargar lista completa
  };

  return (
    <div className="container">
      <h2>Mensajero</h2>

      {/* Formulario para crear o editar */}
      <MensajeForm
        handleNewMessage={handleNewMessage}
        mensajeEditando={mensajeEditando}
      />

      {/* Mostrar tabla solo si no está cargando */}
      {!cargando && (
        <TablaMensajes
          mensajes={mensajes}
          onBorrarMensaje={borrarMensaje}
          onEditarMensaje={editarMensaje}
        />
      )}

      {/* Estado de carga */}
      {cargando && <p>Cargando mensajes...</p>}
    </div>
  );
}

export default Mensajero;
