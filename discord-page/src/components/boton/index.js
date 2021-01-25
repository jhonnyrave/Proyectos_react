import React from "react";

export default function Boton({
  width = "12.4rem",
  heigth = "3.5rem",
  clase = "boton_inical",
  onClick,
  href = "",
  text = "Iniciar sesión",
}) {
  return (
    <a href={href} width={width} heigth={heigth} class={clase}>
      {text}
    </a>
  );
}
