import React from "react";
import BuscaCoctel from "./components/BuscaCoctel";

function App() {
  return (
    <div className="container">
      <h1>Explorador de cócteles</h1>
      <p>
        Descubre deliciosas recetas de cócteles basadas en tu bebida favorita
      </p>
      <BuscaCoctel />
    </div>
  );
}

export default App;
