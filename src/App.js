import "./App.css";
import logoContador from "./Imagenes/logoContador.png";
import Boton from "./Componentes/Boton.jsx";
import Contador from "./Componentes/Contador.jsx";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  //Manejador de Click

  const manejarClick = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  const restarClic = () => {
    setNumClics(numClics - 1);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logoContador} alt="Logo FCC" />
      </div>

      <div className="contenedor-principal">
        <Contador numClics={numClics} />

        <Boton
          texto="Sumar +1"
          claseBoton="boton-clic"
          manejarClic={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          claseBoton="boton-reiniciar"
          manejarClic={reiniciarContador}
        />
        <Boton
          texto="Restar -"
          claseBoton="boton-restar"
          manejarClic={restarClic}
        />
      </div>
    </div>
  );
}

export default App;
