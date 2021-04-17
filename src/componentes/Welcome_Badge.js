import React from "react";
import { Link } from "react-router-dom";
import Astronauts from "../imagenes/astronauts.svg";
import Logo from "../imagenes/platziconf-logo.svg";
import "./estilos/Welcome_Badge.css";

function Welcome_Badge() {
  return (
    <div className="Home">
      <div className="col-text">
        <img src={Logo} alt="Platzi conf logo" />
        <div>
          <h1>CREA TUS BADGES</h1>
          <p>La mejor manera para manejar tu conferencia</p>
          <Link className="btn btn-primary" to="/badges">
            Start now
          </Link>
        </div>
      </div>
      <div className="col-img">
        <img src={Astronauts} alt="Astronauta" />
      </div>
    </div>
  );
}

export default Welcome_Badge;
