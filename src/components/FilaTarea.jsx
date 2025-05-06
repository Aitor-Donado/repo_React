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
  const getTiempoQueda = () => {
    const ahora = new Date();
    const momento = new Date(tarea.momento);
    const tiempoQueda = momento - ahora;
    if (tiempoQueda <= 0) {
      return "La tarea está vencida";
    }
    const dias = Math.floor(tiempoQueda / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (tiempoQueda % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((tiempoQueda % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoQueda % (1000 * 60)) / 1000);
    return `Quedan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
  };

  const handleMouseOver = (e) => {
    e.target.title = getTiempoQueda();
  };

  const handleOnMouseLeave = (e) => {
    e.target.title = "";
  };

  return (
    <tr onMouseOver={handleMouseOver} onMouseLeave={handleOnMouseLeave} on>
      <td className={getBgClass()}>{tarea.texto}</td>
      <td className={tarea.prioridad}>{tarea.prioridad}</td>
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
