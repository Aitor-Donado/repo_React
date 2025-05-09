import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./estilos/estilo_tarea.css";
// import App from "./App.jsx";
import Mensajero from "./Mensajero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mensajero />
  </StrictMode>
);
