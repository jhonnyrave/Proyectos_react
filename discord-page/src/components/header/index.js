import React from "react";
import TitleList from "./titlelist";
import Logo from "../logo";
import "../header/header.css";
import "../boton/boton.css";
import Boton from "../boton";

export default function Header(props) {
  //const [img_header, setimg_header] = useState(false);
  const titleListElement = props.titleListElement;
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <Logo
              width="150px"
              heigth="60px"
              onClick={() => console.log("has dado click")}
            ></Logo>
          </div>
          <nav className="navbar__menu">
            <ul className="nav">
              {titleListElement.map((titleList) => (
                <TitleList
                  title={titleList.title}
                  link={titleList.link}
                  key={titleList.key}
                ></TitleList>
              ))}
              <li className="boton_primary">
                <Boton></Boton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
