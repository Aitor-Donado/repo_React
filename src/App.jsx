import React, { useEffect, useState } from "react";
import BuscaCoctel from "./components/BuscaCoctel";
import MuestraCocteles from "./components/MuestraCocteles";

function App() {
  const [cocteles, setCocteles] = useState([]);
  const [cargando, setCargando] = useState(false);
  const buscarCocteles = async (ingrediente) => {
    setCargando(true);
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingrediente}`;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      console.log(datos);
      setCocteles(datos.drinks);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    console.log("cocteles a posteriori", cocteles);
    console.log("cargando a posteriori", cargando);
  }, [cocteles, cargando]);

  return (
    <div className="container">
      <h1>Explorador de cócteles</h1>
      <p>
        Descubre deliciosas recetas de cócteles basadas en tu bebida favorita
      </p>
      <BuscaCoctel buscarCocteles={buscarCocteles} />
      <MuestraCocteles cocteles={cocteles} cargando={cargando} />
    </div>
  );
}

export default App;
