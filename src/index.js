/*
Importa React, ReactDom; el componente Provider desde
la librería rect-redux; los componentes BrowserRouter,
Route, Redirect y Switch desde la librería react-router
-dom; el componente Results; el componente Details y
finalmente el objeto store desde redux.

Dicho objeto store es el lugar donde se guarda toda la
información de los estados de la aplicación, que luego
podrá ser leída desde cualquiera de los componentes
sin importar su jerarquía en el árbol del dom.

Declara la constante Root, ésta contiene el código JSX
que especifica los componentes básicos de la vista.

El segundo componente Route tiene como atributo path una
expresión, que quiere denotar que la última parte de la
url será variable con nombre itemId. Dicha variable es
pasada como propiedad al hijo de Route; al componente
Details.

Procesa y muestra finalmente el contenido de la constan-
te Root en el DOM
*/

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Results from "./components/results";
import Details from "./components/details";
import AppBar from "./components/appBar";

import store from "./redux/store";

const Root = (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/results">
					<AppBar />
					<Results />
				</Route>
				<Route path="/details/:itemId">
					<AppBar />
					<Details />
				</Route>
				<Redirect from="/" to="/results" />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDom.render(Root, document.getElementById("root"));
