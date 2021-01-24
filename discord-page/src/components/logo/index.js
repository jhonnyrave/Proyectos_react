import React from "react";
import imglogo from "../../img/images.jpeg";

export default function Logo({ width = "150px", heigth = "60px", onClick }) {
  return (
    <a href="#">
      <img
        onClick={onClick}
        width={width}
        height={heigth}
        alt="logo"
        src={imglogo}
      />
    </a>
  );
}
