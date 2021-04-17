import React from "react";
import ListaBadges from "../componentes/ListaBadges";
import "./estilos/Badges.css";
import logo from "../imagenes/badge-header.svg";
import { Link } from "react-router-dom";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        nombre: "Freda",
        apellido: "Grady",
        correo: "Leann_Berge@gmail.com",
        profesion: "Legacy Brand Director",
        twitter: "FredaGrady22221-7573",
        avatar:
          "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        nombre: "Major",
        apellido: "Rodriguez",
        correo: "Ilene66@hotmail.com",
        profesion: "Human Research Architect",
        twitter: "ajorRodriguez61545",
        avatar:
          "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        nombre: "Daphney",
        apellido: "Torphy",
        correo: "Ron61@hotmail.com",
        profesion: "National Markets Officer",
        twitter: "DaphneyTorphy96105",
        avatar:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={logo}
                alt="logo conferencia"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <ListaBadges badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
