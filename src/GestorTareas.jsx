import { useEffect, useState } from "react";
import FormTareas from "./components/FormTareas";
import TablaTareas from "./components/TablaTareas";

function GestorTareas() {
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);
  const [tareas, setTareas] = useState(() => {
    // Cargar tareas desde localStorage si existen
    const storedTareas = localStorage.getItem("tareas");
    console.log("Tareas cargadas desde localStorage:", storedTareas);
    return storedTareas ? JSON.parse(storedTareas) : [];
  });

  // Guardar tareas en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    if (tareas.filter((tarea) => tarea.prioridad === "alta").length > 3) {
      setMostrarAdvertencia(true);
    } else {
      setMostrarAdvertencia(false);
    }
  }, [tareas]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };
  return (
    <>
      <div className="container">
        <h1>Gestor de tareas</h1>
        <FormTareas onAgregarTareas={agregarTarea} />
        <h2>Tareas pendientes</h2>
        <TablaTareas tareas={tareas} onBorrarTarea={borrarTarea} />
        {mostrarAdvertencia && (
          <div id="advertencia" className="alert alert-danger">
            Tienes demasiadas tareas importantes
          </div>
        )}
      </div>
    </>
  );
}

export default GestorTareas;
