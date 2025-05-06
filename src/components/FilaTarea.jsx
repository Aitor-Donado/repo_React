import React from "react";

const FilaTarea = ({ tarea, onBorrarTarea }) => {
  // El color del tr es dependiente de la prioridad de la tarea
  // Mapeamos prioridades a utilidades de fondo
  const getBgClass = () => {
    switch (tarea.prioridad) {
      case "muy_baja":
        return "bg-light";
      case "baja":
        return "bg-success bg-opacity-10"; // Con opacidad
      case "media":
        return "bg-warning bg-opacity-10";
      case "alta":
        return "bg-danger bg-opacity-10";
      default:
        return "";
    }
  };
  return (
    <tr className={getBgClass()}>
      <td className={getBgClass()}>{tarea.texto}</td>
      <td className={getBgClass()}>{tarea.prioridad}</td>
      <td className={getBgClass()}>
        {tarea.momento.toLocaleString() || "No especificada"}
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onBorrarTarea(tarea.id)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default FilaTarea;
