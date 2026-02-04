import React from "react";
import './estilos.css';
import criarNota from "../../App.js";
export default class FormularioCadastro extends React.Component {

    constructor(props){
        super();
        this.titulo = "";
        this.texto = "";
        this.categorias = "Sem categoria";
        
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categorias = evento.target.value;
    }

    _handleMudancaTitulo(evento) {
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categorias);
    }


  render() {
    return (
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
            <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
                <option>Sem categoria</option>
                {this.props.categorias.map(categorias =>{
                    return <option>{categorias}</option>
                })}
            </select>
            <input type="text" placeholder="Titulo" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
            <textarea rows={10} placeholder="Escreva sua nota" className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}></textarea>
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
    )}};