/*
Importa la librería react y Component desde react.

Importa el componente Page encargado de la vista.

Importa la función connect desde react-redux.

Importa la función withRouter desde react-router-dom.

Declara la clase Results.

Crea el constructor que tendrá como estado inicial un objeto
vacío.

Crea un enlace a la función goTo para poder llamarla
a lo largo de toda la clase y dentro de los eventos
que contiene sin que retorne "undefined".


Declara la función goTo que recibe path como argumento.
Luego el método history.push servirá para redirigir a
otra URL. Dicho método proviene de withRouter de react
router dom.

Inicia la función render.

Crea un alias para poder llamar a results sin necesidad
de escribir también this.props. 

En este contexto, results es una de las propiedades de la
clase Results, pero no proviene del componente padre sino
del objeto state global de redux, y llega hasta aquí vía 
mapStateToProps, parte de react-redux.

Retorna el componente Page pasando como propiedades a
results y la función goTo.

Declara como contante mapStateToProps, que recibe el objeto
state global de redux y luego retorna qué llaves de dicho
objeto va a enlazar con las propiedades de la clase Results.
En éste caso results (que será llamado desde el hijo Page).

Exporta la función withRouter, que dentro de sí tiene
como argumentos al componente Results y a connect, que a 
su vez tiene como argumentos la función mapStatetoProps.
*/

import React, { Component } from 'react';
import Page from './page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
        console.log(this.props.history.push(path));
    }

    render() {
        const {
            results,
        } = this.props;

        return (
            <Page
                results={results}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});

export default withRouter(
    connect(mapStateToProps)(Results)
);
