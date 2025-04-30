import React from "react";
import AcordeonItem from "./AcordeonItem";

const Acordeon = () => {
  return (
    <div className="accordion" id="accordionExample">
      <AcordeonItem key="1" encabezado="123" texto="abc" identificador="1" />
      <AcordeonItem
        key="2"
        encabezado="Segundo desplegable"
        texto="este es el texto del segundo desplegable"
        identificador="2"
      />
      <AcordeonItem
        key="3"
        encabezado="Último desplegable"
        texto="este es el texto del tercer desplegable"
        identificador="3"
      />
    </div>
  );
};

export default Acordeon;
