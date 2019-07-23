import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField/renderField";

const FormFirstPage = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name="question1"
				type="radio"
				component={renderField}
				label="Question 1"
			/>
			<Field
				name="question2"
				type="radio"
				component={renderField}
				label="Question 2"
			/>
			<Field
				name="question3"
				type="radio"
				component={renderField}
				label="Question 3"
			/>
			<div>
				<button type="submit" className="next">
					Next
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: "form", // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormFirstPage);
