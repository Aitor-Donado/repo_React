import React from "react";

const FilaTarea = ({ tarea }) => {
  return (
    <tr key={tarea.id}>
      <td>{tarea.texto}</td>
      <td>{tarea.prioridad}</td>
      <td>{tarea.momento || "No especificada"}</td>
      <td>{tarea.id}</td>
    </tr>
  );
};

export default FilaTarea;
