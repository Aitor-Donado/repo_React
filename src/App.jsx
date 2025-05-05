import { useState } from "react";
import FormTareas from "./components/FormTareas";
import TablaTareas from "./components/TablaTareas";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
  };

  return (
    <>
      <div className="container">
        <h1>Gestor de tareas</h1>
        <FormTareas onAgregarTareas={agregarTarea} />
        <h2>Tareas pendientes</h2>
        <TablaTareas tareas={tareas} />
      </div>
    </>
  );
}

export default App;
