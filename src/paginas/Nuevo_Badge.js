import React from "react";
import Badge from "../componentes/Badge";
import BadgeForm from "../componentes/BadgeForm.js";
import header from "../imagenes/badge-header.svg";
import "./estilos/NuevoBadge.css";

class Nuevo_Badge extends React.Component {
  state = {
    form: {
      Nombre_Asistente: "",
      Apellido_Asistente: "",
      Correo_Asistente: "",
      Profesion_Asistente: "",
      Twitter_Asistente: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

    /* Otra manera para que no se escriba la información escrita en el fomulario 
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;*/
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="header_logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                nombre={this.state.form.Nombre_Asistente}
                apellido={this.state.form.Apellido_Asistente}
                correo={this.state.form.Correo_Asistente}
                profesion={this.state.form.Profesion_Asistente}
                twitter={this.state.form.Twitter_Asistente}
                avatar="https://es.gravatar.com/userimage/204567629/b9235d2ad69ec5a0220c8c4288bfebb2.png"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Nuevo_Badge;
