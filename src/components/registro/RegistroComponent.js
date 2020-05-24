import React from "react";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="pantalla-1">
      <h5>Pantalla 1 - Registro...</h5>
      <p>
        Hola, necesito que me otorgues el poder de saber cómo quieres que te
        llame en adelante ;)
      </p>
      <input placeholder="Llamame..." />
      <Link to="/bienvenida" className="btn btn-primary">Siguiente</Link>
    </div>
  );
};

export default Registro;
