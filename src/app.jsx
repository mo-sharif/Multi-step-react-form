import React, { Component } from "react";
import { connect } from "react-redux";
import { welcomeAction } from "./actions/welcomeAction";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

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
			<div className="flex-container">
				<div className="row">
					<div className="flex-item">
						<Link to="assess" className="cardButton">START YOUR CHECK-UP</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
