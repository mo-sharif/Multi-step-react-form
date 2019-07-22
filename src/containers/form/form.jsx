import React, { Component } from "react";
import { connect } from "react-redux";
import { welcomeAction } from "../../actions/welcomeAction";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import FormBody from "../../components/form/formBody/formBody";
import FormHeader from "../../components/form/formHeader/formHeader";

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

class Form extends Component {
	welcomeAction() {
		this.props.welcomeAction();
	}
	render() {
		return (
			<div className="flex-container">
				<div className="row">
					<FormHeader />
				</div>
				<div className="row">
					<FormBody />
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
