import React from "react";
import "../titlelist/titlelist.css";
import { Link } from "react-router-dom";

export default function TitleList(props) {
  return (
    <li className="nav__item">
      <Link className="nav__link" to={props.link}>
        {props.title}
      </Link>
    </li>
  );
}
