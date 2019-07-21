import React from "react";
import Reactdom from "react-dom";
import App from "./app.jsx";
import { Provider } from "react-redux";
import configureStore from "../store";

Reactdom.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById("app")
);
