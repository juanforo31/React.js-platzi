import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imagenes/badge-header.svg";
import "./estilos/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar_brand">
            <img
              src={Logo}
              alt="Logo conferencia"
              className="Navbar_brand-logo"
            />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
