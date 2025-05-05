import React from "react";
import FilaTarea from "./FilaTarea";

const TablaTareas = ({ tareas }) => {
  return (
    <table>
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
          <FilaTarea tarea={tarea} tareas={tareas} />
        ))}
      </tbody>
    </table>
  );
};

export default TablaTareas;
