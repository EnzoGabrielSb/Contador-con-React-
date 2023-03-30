import React from "react";
import "../Componentes/Contador.css";

function Contador(props) {
  return <div className="contador">{props.numClics}</div>;
}

export default Contador;
