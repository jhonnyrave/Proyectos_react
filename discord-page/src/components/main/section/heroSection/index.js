import React from "react";
import Boton from "../../../boton";
import "../../main.css";

function HeroSection() {
  return (
    <div className="hero__body">
      <div className="hero__text">
        <h1 className="hero__title">Tu sitio para hablar</h1>
        <p className="hero__message">
          Discord te permite hablar a diario y divertirte más a menudo, ya
          formes parte de un club escolar, un grupo de jugadores, una comunidad
          mundial de arte o un grupo de amigos que solo quieren pasar tiempo
          juntos.
        </p>
      </div>
      <div className="hero__button">
        <Boton
          text="Descargar para linux"
          width="27rem"
          height="5.6rem"
          clase="boton__descargar"
        ></Boton>
        <Boton
          text="Abrir Discord en tu navegador"
          width="31rem"
          height="5.6rem"
          clase="boton__abrir"
        ></Boton>
      </div>
    </div>
  );
}

export default HeroSection;
