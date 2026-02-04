import React from "react";
import CardNota from "../CardNota/CardNota.jsx";
import './estilos.css';

export default class ListaDeNotas extends React.Component {
   
   render() {
    return (
        <ul className="Lista_lista">
            {this.props.notas.map((nota, index) => {
                return (
                    <li key={index} className="Lista_lista__li">
                        <CardNota
                        deletarNota={this.props.apagarNota}
                        titulo={nota.titulo} texto={nota.texto}
                        indice = {index}
                        categoria = {nota.categoria}/>
                    </li>
                )
            })
            
            }
        </ul>
)}};