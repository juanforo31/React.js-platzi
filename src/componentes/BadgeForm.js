import React from 'react'


class BadgeForm extends React.Component{

    handleChange = e => {
        /* Esta funcion hace que tome cada valor que se escriba en e input
            console.log({
            name: e.target.name,
            value: e.target.value}); */
            this.setState({
                Nombre_Asistente: e.target.value,
                Apellido_Asistente: e.target.value,
                Correo_Asistente: e.target.value,
                Profesion_Asistente: e.target.value,
                Twitter_Asistente: e.target.value
            });
    };
    
    handleClick = e => {
        console.log("El botón ha sido presionado");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("El formulario se ha enviado");
    };

    render(){
        return(
            <div>
                <h1> Nuevo Asistente </h1>
                <form onSubmit={this.handleSubmit}>
                    {/* Nombre_Asistente */}
                    <div className="form-group">
                        <label> Nombre </label>
                        <input onChange={this.handleChange} type="text" name="Nombre_Asistente" className="form-control"/>
                    </div>
                    {/* Apellido_Asistente */}
                    <div className="form-group">
                        <label> Apellido </label>
                        <input onChange={this.handleChange} type="text" name="Apellido_Asistente" className="form-control"/>
                    </div>
                    {/* Correo_Asistente */}
                    <div className="form-group">
                        <label> Correo </label>
                        <input onChange={this.handleChange} type="email" name="Correo_Asistente" className="form-control"/>
                    </div>
                    {/* Profesion_Asistente */}
                    <div className="form-group">
                        <label> Profesión </label>
                        <input onChange={this.handleChange} type="text" name="Profesion_Asistente" className="form-control"/>
                    </div>
                    {/* Twitter_Asistente */}
                    <div className="form-group">
                        <label> Twitter </label>
                        <input onChange={this.handleChange} type="text" name="Twitter_Asistente" className="form-control"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </div>
        );
    }
}
export default BadgeForm