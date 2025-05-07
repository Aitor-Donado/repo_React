import React from "react";
const MuestraCocteles = ({ cocteles, cargando }) => {
  return (
    <div>
      <h2>Resultados</h2>
      // Convertir cocteles en string
      <div>cocteles: {JSON.stringify(cocteles)}</div>
      <div>cargando: {JSON.stringify(cargando)}</div>
    </div>
  );
};
export default MuestraCocteles;
