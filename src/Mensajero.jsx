import { useEffect, useState } from "react";
import TablaMensajes from "./TablaMensajes";
import MensajeForm from "./components/MensajeForm";

function Mensajero() {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Función reutilizable para cargar mensajes
  const cargarMensajes = () => {
    setCargando(true);
    fetch("https://aitor.alwaysdata.net/listado ")
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

  // Cargar mensajes al montar el componente
  useEffect(() => {
    cargarMensajes();
  }, []);

  // Enviar notificación cuando llega un nuevo mensaje
  const handleNewMessage = () => {
    cargarMensajes(); // Recargar mensajes desde la API
  };

  // Borrar mensaje
  const borrarMensaje = (id) => {
    fetch(`https://aitor.alwaysdata.net/listado/ ${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        cargarMensajes(); // Refrescar lista tras eliminar
      })
      .catch((error) => {
        console.error("Error al borrar el mensaje:", error);
      });
  };

  return (
    <div className="container">
      <h2>Mensajero</h2>
      <MensajeForm handleNewMessage={handleNewMessage} />
      {!cargando && (
        <TablaMensajes mensajes={mensajes} onBorrarMensaje={borrarMensaje} />
      )}
    </div>
  );
}

export default Mensajero;
