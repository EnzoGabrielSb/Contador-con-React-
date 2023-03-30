import React from "react";
import "../Componentes/Boton.css";

function Boton({ texto, claseBoton, manejarClic }) {
  return (
    <button className={claseBoton} onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;
