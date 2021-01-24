import React from "react";

export default function Boton({
  width = "150px",
  heigth = "60px",
  clase = "boton_inical",
  onClick,
  href = "",
  text = "Ingresar",
}) {
  return (
    <a href={href} width={width} heigth={heigth} class={clase}>
      {text}
    </a>
  );
}
