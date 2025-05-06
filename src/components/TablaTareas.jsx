import React from "react";
import FilaTarea from "./FilaTarea";

const TablaTareas = ({ tareas, onBorrarTarea }) => {
  return (
    <table className="table">
      <caption>Lista de tareas</caption>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Prioridad</th>
          <th>Fecha</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea) => (
          <FilaTarea
            key={tarea.id}
            tarea={tarea}
            tareas={tareas}
            onBorrarTarea={onBorrarTarea}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablaTareas;
