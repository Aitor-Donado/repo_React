import React, { useState } from "react";

const FormTareas = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tarea_nueva"></label>
      <input
        type="text"
        id="tarea_nueva"
        maxLength="40"
        placeholder="Introduce nueva tarea"
      />
      <select name="prioridad" id="selector_prioridades">
        <option value="muy_baja">Tarea poco importante</option>
        <option value="baja">Tarea Normal</option>
        <option value="media">Tarea Importante</option>
        <option value="alta">Tarea Urgente</option>
      </select>
      <input type="datetime-local" id="momento" />
      <button type="submit" id="aniadir_tarea">
        Añadir
      </button>
    </form>
  );
};

export default FormTareas;
