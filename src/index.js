import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import Form from "./containers/form/form.jsx";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const routing = (
	<Provider store={configureStore()}>
		<Router>
			<div className="wrapper">
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/assess" component={Form} />
				</Switch>
			</div>
		</Router>
	</Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
