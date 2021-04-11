import React from "react";

class BadgeForm extends React.Component {
  /* En caso de querer cambiar el estado de un input se realizaria de esta manera
    state ={
        Nombre_Asistente: "Andrés"
        ...
    }
 */
  //state = {};

  /* handleChange = e => {
            Esta funcion hace que tome cada valor que se escriba en e input
            console.log({
            name: e.target.name,
            value: e.target.value}); 

            this.setState({
                [e.target.name]: e.target.value,
            });
    }; */

  handleClick = (e) => {
    console.log("El botón ha sido presionado");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("El formulario se ha enviado");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1> Nuevo Asistente </h1>
        <form onSubmit={this.handleSubmit}>
          {/* Nombre_Asistente */}
          <div className="form-group">
            <label> Nombre </label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="Nombre_Asistente"
              className="form-control"
              defaultValue={this.props.formValues.Nombre_Asistente}
            />
          </div>
          {/* Apellido_Asistente */}
          <div className="form-group">
            <label> Apellido </label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="Apellido_Asistente"
              className="form-control"
              defaultValue={this.props.formValues.Apellido_Asistente}
            />
          </div>
          {/* Correo_Asistente */}
          <div className="form-group">
            <label> Correo </label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="Correo_Asistente"
              className="form-control"
              defaultValue={this.props.formValues.Correo_Asistente}
            />
          </div>
          {/* Profesion_Asistente */}
          <div className="form-group">
            <label> Profesión </label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="Profesion_Asistente"
              className="form-control"
              defaultValue={this.props.formValues.Profesion_Asistente}
            />
          </div>
          {/* Twitter_Asistente */}
          <div className="form-group">
            <label> Twitter </label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="Twitter_Asistente"
              className="form-control"
              defaultValue={this.props.formValues.Twitter_Asistente}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
export default BadgeForm;
