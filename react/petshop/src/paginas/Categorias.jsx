import React from 'react'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import { useParams } from 'react-router-dom/'
import { Route } from 'react-router-dom/';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

const Categoria = () => {
    const {id} = useParams();
    const {path } = useRouteMatch();
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <ListaCategorias/>
        <Route exact path={`${path}`}>
        <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        </>
    )
}

export default Categoria