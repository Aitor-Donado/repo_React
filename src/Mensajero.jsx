import { useEffect, useState } from "react";
function Mensajero() {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://aitor.alwaysdata.net/listado")
      .then((response) => response.json())
      .then((data) => {
        setMensajes(data.listado);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener los mensajes:", error);
        setCargando(true);
      });
  }, []);

  return (
    <div className="container">
      <h2>Mensajero</h2>
      <p>{cargando ? "Cargando..." : mensajes[0].titulo}</p>
    </div>
  );
}
export default Mensajero;
