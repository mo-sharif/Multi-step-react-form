import React, { Component } from "react";
import { connect } from "react-redux";
import FormBody from "../../components/form/formBody/formBody";
import FormHeader from "../../components/form/formHeader/formHeader";

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });

class Form extends Component {
	result(values) {
		alert("Submited: " + JSON.stringify(values));
	}
	render() {
		return (
			<div className="flex-container">
				<div className="row">
					<FormHeader />
				</div>
				<div className="row">
					<FormBody
						onSubmit={this.result}
						questions={this.props.questionsReducer}
					/>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Form);
