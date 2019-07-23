import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField/renderField";

const renderError = ({ meta: { touched, error } }) =>
	touched && error ? <span>{error}</span> : false;

const FormSecondPage = props => {
	const { handleSubmit, previousPage } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name="question4"
				type="radio"
				component={renderField}
				label="Question 4"
			/>
			<Field
				name="question5"
				type="radio"
				component={renderField}
				label="Question 5"
			/>
			<Field
				name="question6"
				type="radio"
				component={renderField}
				label="Question 6"
			/>
			<div>
				<button type="button" className="previous" onClick={previousPage}>
					Previous
				</button>
				<button type="submit" className="next">
					Next
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: "form", //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormSecondPage);
