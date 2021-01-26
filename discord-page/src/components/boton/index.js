import React from "react";
import { Link } from "react-router-dom";

export default function Boton({
  width = "12.4rem",
  heigth = "3.5rem",
  clase = "boton_inical",
  onClick,
  link = "/login",
  text = "Iniciar sesión",
}) {
  return (
    <Link to={link} width={width} heigth={heigth} class={clase}>
      {text}
    </Link>
  );
}
