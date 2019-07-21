import React, { Component } from "react";
import { connect } from "react-redux";
import { welcomeAction } from "../actions/welcomeAction";

/*
 * mapDispatchToProps
 */
let mapDispatchToProps = dispatch => ({
	welcomeAction: () => dispatch(welcomeAction())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });

class App extends Component {
	welcomeAction() {
		this.props.welcomeAction();
	}
	render() {
		return (
			<div className="App">
				<header className="header">App Header</header>
				<section className="body">
					<h1 className="title">Welcome to Total Brain</h1>
					<pre>{JSON.stringify(this.props)}</pre>
					<button onClick={this.welcomeAction}>Welcome</button>
				</section>
				<footer className="header">App Footer</footer>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
