import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Results from "./components/Results";
import Details from "./components/Details";
import store from './redux/store';

const Root = (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/results">
					<Results />
				</Route>
				<Route path="/details/:itemId">
					<Details />
				</Route>
				<Redirect from="/" to="/results" />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDom.render(Root, document.getElementById("root"));
