import React from "react";
import ReactDOM from "react-dom";
//import Nuevo_Badge from "./paginas/Nuevo_Badge";
import Badges from "./paginas/Badges";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
