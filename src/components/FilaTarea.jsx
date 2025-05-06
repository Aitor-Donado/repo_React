import React from "react";

const FilaTarea = ({ tarea, onBorrarTarea }) => {
  return (
    <tr>
      <td>{tarea.texto}</td>
      <td>{tarea.prioridad}</td>
      <td>{tarea.momento || "No especificada"}</td>
      <td>
        <button type="button" onClick={() => onBorrarTarea(tarea.id)}>
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default FilaTarea;
