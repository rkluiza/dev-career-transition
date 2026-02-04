import React from 'react';
import './estilo.css';
import {ReactComponent as DeleteIcon} from '../../assets/img/delete.svg';
class CardNota extends React.Component {

    apagar() {
        let indice = this.props.indice;
        this.props.deletarNota(indice);
    }

    render() { 
        return (
            <section className='card-nota'>
                <header>
                    <h3>{this.props.titulo}</h3>
                    <DeleteIcon onClick={this.apagar.bind(this)}/>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;