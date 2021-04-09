import React from 'react'
import Logo from '../imagenes/badge-header.svg'
import './estilos/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar_brand">
                        <img src={Logo} alt="Logo conferencia" className="Navbar_brand-logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div> 
            </div>
        )
    }
}

export default Navbar