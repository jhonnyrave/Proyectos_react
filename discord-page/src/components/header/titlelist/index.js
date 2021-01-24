import React from "react";
import "../titlelist/titlelist.css";

export default function TitleList(props) {
  return (
    <li className="nav__item">
      <a className="nav__link" href={props.link}>
        {props.title}
      </a>
    </li>
  );
}
