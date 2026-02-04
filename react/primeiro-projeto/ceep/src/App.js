import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import React from 'react';
import './assets/App.css';
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './assets/dados/Categorias';


class App extends React.Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
        categorias={this.categorias.categorias}
        criarNota={this.notas.criarNota}/>
        
        <main className='conteudo-principal'>
            <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.categorias.categorias}/>
            <ListaDeNotas
            apagarNota={this.notas.deletarNota}
            notas={this.notas.notas}/>

        </main>
      </section>
    );
  }
}

export default App;
