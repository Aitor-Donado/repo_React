import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// ... otros imports ...
import LogIn from "./components/LogIn";
import BarraNavegacion from "./components/BarraNavegacion";
import Mensajero from "./Mensajero";

// ... otros componentes ...

import Home from "./Home";
import GestorTareas from "./GestorTareas";
import Cocteleria from "./Cocteleria";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tareas" element={<GestorTareas />} />
          <Route path="/cocteleria" element={<Cocteleria />} />
          <Route path="/mensajero" element={<Mensajero />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
