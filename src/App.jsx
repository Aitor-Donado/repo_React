import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GestorTareas from "./GestorTareas";
import Cocteleria from "./Cocteleria";
import BarraNavegacion from "./components/BarraNavegacion";
import LogIn from "./components/LogIn";

function App() {
  const [user, setUser] = useState(null);

  const logeador = (usuario) => {
    setUser(usuario);
  };
  return (
    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tareas" element={<GestorTareas />} />
        <Route path="/cocteleria" element={<Cocteleria usuario={user} />} />
        <Route path="/login" element={<LogIn logeador={logeador} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
