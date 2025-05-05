import React from "react";

const FormTareas = ({ onAgregarTareas }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const tareaData = {
      texto: formData.get("texto"),
      prioridad: formData.get("prioridad"),
      momento: formData.get("momento"),
    };
    onAgregarTareas(tareaData);
    e.target.reset(); // Esta línea resetea el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tarea_nueva"></label>
      <input
        type="text"
        name="texto"
        maxLength="40"
        placeholder="Introduce nueva tarea"
      />
      <select name="prioridad" id="selector_prioridades">
        <option value="muy_baja">Tarea poco importante</option>
        <option value="baja">Tarea Normal</option>
        <option value="media">Tarea Importante</option>
        <option value="alta">Tarea Urgente</option>
      </select>
      <input type="datetime-local" name="momento" />
      <button type="submit" id="aniadir_tarea">
        Añadir
      </button>
    </form>
  );
};

export default FormTareas;
