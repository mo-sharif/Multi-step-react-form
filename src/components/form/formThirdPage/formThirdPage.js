import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField/renderField";

const FormThirdPage = props => {
	const { handleSubmit, pristine, previousPage, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name="question7"
				type="radio"
				component={renderField}
				label="Question 7"
			/>
			<Field
				name="question8"
				type="radio"
				component={renderField}
				label="Question 8"
			/>
			<Field
				name="question9"
				type="radio"
				component={renderField}
				label="Question 9"
			/>
			<div>
				<button type="button" className="previous" onClick={previousPage}>
					Previous
				</button>
				<button type="submit" disabled={pristine || submitting}>
					Submit
				</button>
			</div>
		</form>
	);
};
export default reduxForm({
	form: "form", //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormThirdPage);
