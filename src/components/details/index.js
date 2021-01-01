/*
Importa React desde react.

Importa la función connect desde react-redux.

Importa la función withRouter desde react-router-dom.

Importa el componente Page encargado de la vista.

Importa la acción findCurrentItem desde las acciones de
redux.

Declara la clase Details como un componente de react.

Crea un enlace a la función goTo para poder llamarla
a lo largo de toda la clase y dentro de los eventos
que contiene sin que retorne "undefined".

Declara el comportamiento del evento componentDidMount().

Crea un alias para usar match.params (método de react
router dom usado en los casos que la URL es variable y
debe ser conocida por la aplicación) que llega vía las
propiedades del componente, pero sin necesidad de escribir
también this.props y que sirve para obtener el valor de
una parte de la dirección URL. Mismo caso para la acción
findCurrentItem, que aún cuando no fue pasada como una
propiedad desde el componente padre, llega a ser una
gracias a mapDispatchToProps, que unas líneas más abajo
hace disponible ésta función dentro de la clase Details.

Llama la acción findCurrentItem pasándole como argumento
itemId, dicha función hace que su reducer correspondiente
se haga cargo de retornar el objeto currentItem, que a su
vez proviene de data/items.js y se haga accesible a través
del state global de redux.

Declara la función goTo que recibe path como argumento.
Luego el método history.push servirá para redirigir a
otra URL. Dicho método proviene de withRouter de react
router dom.

Inicia la función render.

Crea un alias para poder llamar a currentItems sin necesidad
de escribir también this.props. currentitems es una de las 
propiedades de la clase Details, pero no proviene del
componente padre sino del objeto state global de redux, y
llega hasta aquí vía mapStateToProps, parte de react-redux.

Retorna el componente Page pasando como propiedades a
currentitem y la función goTo

Declara como contante mapStateToProps, que recibe el objeto
state global de redux y luego selecciona qué llaves de dicho
objeto va a enlazar con las propiedades de la clase Details.
En éste caso results (que será llamado desde el hijo Page) y
currentItem.

Declara como contante mapDispatchToProps, que es un objeto
que hace disponibles como propiedades las funciones de las
acciones de redux. Dicho objeto es parte de react-redux.

Exporta la función withRouter, que dentro de sí tiene
como argumentos al componente Details y a connect, que a 
su vez tiene como argumentos la función mapStatetoProps y
el objeto mapDispatchToProps.
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Page from "./page";
import findCurrentItem from "../../redux/actions/findCurrentItem";

class Details extends Component {
    constructor(props) {
        super(props);

        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {
            match: {
                params: { itemId },
            },
            findCurrentItem,
        } = this.props;

        findCurrentItem(itemId);
    }

      goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const { currentItem } = this.props;
        return <Page currentItem={currentItem} goTo={this.goTo} />;
    }
}

const mapStateToProps = (state) => ({
    results: state.results,
    currentItem: state.currentItem,
});

const mapDispatchToProps = {
    findCurrentItem,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);
