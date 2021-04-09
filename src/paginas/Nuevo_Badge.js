import React from 'react'
import Badge from '../componentes/Badge'
import Navbar from '../componentes/Navbar'
import header from '../imagenes/badge-header.svg'
import './estilos/NuevoBadge.css'

class Nuevo_Badge extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="header_logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge nombre="Juan David"
                                apellido="Forero Rodríguez"
                                profesion="Ingeniero informático"
                                twitter="juanforo3101"
                                avatar="https://es.gravatar.com/userimage/204567629/b9235d2ad69ec5a0220c8c4288bfebb2.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nuevo_Badge;