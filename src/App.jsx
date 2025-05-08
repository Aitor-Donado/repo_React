import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GestorTareas from "./GestorTareas";
import Cocteleria from "./Cocteleria";
import BarraNavegacion from "./components/BarraNavegacion";
import LogIn from "./components/LogIn";
import AuthContext from "./AuthContext";
function App() {
  return (
    <AuthContext.Provider value={{ nombre: null, edad: null }}>
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tareas" element={<GestorTareas />} />
          <Route path="/cocteleria" element={<Cocteleria />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
