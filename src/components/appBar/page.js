/*
Importa React desde react.

Importa los componentes AppBar, Toolbar y AccountCircle
desde material-ui.

Importa el componente Autocomplete.

Importa los estilos.

Declara el componente Page como una función que recibe
propiedades de su padre IAppBar.

Declara los alias: text que es una cadena, suggestions
que es un objeto, onChangeText y onChangeSelection que
son ambas funciones. Cada alias corresponde a un elemento
del objeto props.

Retorna los componentes necesarios para mostrar en pantalla
la barra de búsqueda. Todas las propiedades recibidas desde
el componente padre IAppBar son pasadas al hijo Autocomplete.

Exporta por defecto la función Page.
*/


import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Autocomplete from "../autocomplete";
import {
  Link
} from "react-router-dom";
import "./style.css";

function Page(props) {
	const { onClickea, text, suggestions, onChangeText, onChangeSelection } = props;

	return (
		<AppBar position="static">
			<Toolbar className="appbar">
				<Link to="/results" className="link__to_root" onClick={() => onClickea()} >
					<Typography variant="h6" color="inherit" >
						Tecnologías
					</Typography>
				</Link>
				<Autocomplete
					text={text}
					suggestions={suggestions}
					onChangeText={onChangeText}
					onChangeSelection={onChangeSelection}
				/>
				<AccountCircle />
			</Toolbar>
		</AppBar>
	);
}

export default Page;
