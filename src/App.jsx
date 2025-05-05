import { useState } from "react";
import FormTareas from "./components/FormTareas";

function App() {
  const [tareas, setTareas] = useState(["texto tarea1", "texto tarea 2"]);
  return (
    <>
      <div className="container">
        <h1>Gestor de tareas</h1>
        <FormTareas />
        <h2>Tareas pendientes</h2>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
