import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Página de inicio</h1>
      <p>
        Si eres mayor de edad, pásate a tomar un{" "}
        <Link to="/cocteleria">coctel</Link>
      </p>
      <p>
        Si no, puedes gestionar tus <a href="/tareas">tareas</a> del cole.
      </p>
    </div>
  );
}

export default Home;
