/*
Importa la librería react y Component desde react.

Importa el componente Page encargado de la vista

Importa la función connect desde react-redux.

Importa las acciones findSuggestions y findResults
desde las acciones de redux.

Importa la función withRouter desde react-router-dom.

Declara la clase IAppBar como un componente.

Crea el constructor para guardar un estado inicial 
para el componente.

El estado inicial es un objeto con un elemento llamado
text que contiene una cadena vacía.

Enlaza la función del evento onChangeText y
onChangeSelection al constructor para que éstas pueda
cambiar el estado.

Inicia la función onChangeText que recibirá text como
argumento.

Actualiza el estado de la clase IAppBar con el contenido
del argumento  text.

Envía text como argumento de la acción findSuggestions
que es parte de las propiedades que recibe la clase
IAppBar.

Inicia la función onChangeSelection que recibe text como
argumento.

Actualiza el estado de la clase IAppBar con el contenido
del argumento text.

Envía text como argumento de la acción findSuggestions que
es parte de las propiedades que recibe la clase
IAppBar.

Declara un alias para this.props.findResults para poder
llamarlo como findResults, lo mismo con match e history,
que son parte del objeto this.props también.

Actualiza el estado de la clase IAppBar con el contenido
del argumento text.

Envía text como argumento de la acción findResults que
es parte de las propiedades que recibe la clase
IAppBar.

Condiciona si la url actual (match.path) es diferente a
/results y devuelve a /results para ver las nuevas
coincidencias.

Declara la función render

Declara text como un alias de this.state.text y
suggestions como alias de this.props.suggestions.

Retorna el Componente Page con sus respectivas propiedades.

Declara la función mapStateToProps proveniente de
react-redux, ésta recibe el objeto state global y retorna
state.suggestions con la llave suggestions. En éste paso
es que finalmente se hace disponible para la clase IAppBar
la información del objeto state global o al menos un
elemento del mismo.

Declara el objeto mapDispatchToProps, éste contiene las
funciones findSuggestions y findResults provenientes de
sus respectivas acciones de redux. De esta forma dichas
funciones se hacen parte del objeto this.props de la clase
IAppBar, por ende, haciendo que la clase pueda modificar
el state global mediante las mismas llamándolas como
this.props.findSuggestions y this.props.findResults.

Exporta la función withRouter que proviene de
react-router-dom, ésta recibe como argumento la función
connect, que proviene de react-redux y que a su vez
recibe como argumentos la función mapStateToProps y el
objeto mapDispatchToProps, así como el componente IAppBar.

En este último paso es que finalmente las acciones son 
conectadas con el state global, así como la posibilidad
de manipular el objeto history que proviene de
react-router-dom.
*/

import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import findSuggestions from "../../redux/actions/findSuggestions";
import findResults from "../../redux/actions/findResults";
import { withRouter } from "react-router-dom";

class IAppBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
		this.onChangeText = this.onChangeText.bind(this);
		this.onChangeSelection = this.onChangeSelection.bind(this);
	}

	onChangeText(text) {
		this.setState({ text });
		this.props.findSuggestions(text);
	}

	onChangeSelection(text) {
		const { findResults, match, history } = this.props;
		this.setState({ text });
		findResults(text);
		if (match.path !== "/results") {
			history.push("/results");
		}
	}

	render() {
		const { text } = this.state;
		const { suggestions } = this.props;

		return (
			<Page
				text={text}
				suggestions={suggestions}
				onChangeText={this.onChangeText}
				onChangeSelection={this.onChangeSelection}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		suggestions: state.suggestions,
	};
};

const mapDispatchToProps = {
	findSuggestions,
	findResults,
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);