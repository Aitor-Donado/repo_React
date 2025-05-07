import React from "react";
import CocktailCard from "./CocktailCard";
const MuestraCocteles = ({ cocteles, cargando }) => {
  return (
    <div>
      <h2>Resultados</h2>
      <div className="row">
        {cocteles.map((coctel) => (
          <div
            key={coctel.idDrink}
            className="col-12  col-md-6 col-lg-4  col-xl-3  mb-4"
          >
            <CocktailCard cocktail={coctel} />
          </div>
        ))}
      </div>
      {cargando && <p>Cargando...</p>}
    </div>
  );
};
export default MuestraCocteles;
