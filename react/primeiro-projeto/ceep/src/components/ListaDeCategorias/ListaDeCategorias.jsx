import React, { Component } from 'react';

class ListaDeCategorias extends Component {

    _handleEventoInput(e){
        let valorCategoria = e.target.value;
        this.props.adicionarCategoria(valorCategoria);

                
        if(e.key === "Enter"){
            console.log("Adicionar categoria");
        }
    }

    _handleEventoInput(e.key) {

    }
    render() { 
        return (
        <section>
            <ul>
                {this.props.categorias,map((categoria, index) =>{
                    return <li key={index} className='lista-categorias_item'>Categorias</li>
                })}
            </ul>
            <input type="text"
            placeholder="Adicionar categoria"
            onKeyUp={this._handleEventoInput}/>      
        </section>
    );
    }
}
 
export default ListaDeCategorias;