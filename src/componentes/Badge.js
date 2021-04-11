import react from "react";
import logo from "../imagenes/badge-header.svg";
import "./estilos/Badge.css";

class Badge extends react.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={logo} alt="Logo conferencia" />
        </div>
        <div className="badge_section-name">
          <img src={this.props.avatar} alt="Avatar" className="badge_avatar" />
          <h1>
            {this.props.nombre} <br /> {this.props.apellido}
          </h1>
        </div>
        <div className="badge_section-info">
          <h3>{this.props.profesion}</h3>
          <div className="badge_twitter">@{this.props.twitter}</div>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;
